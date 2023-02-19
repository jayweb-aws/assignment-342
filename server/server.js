const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

dotenv.config()

const app = express()

app.use(express.json())

const port = 1337
const url = process.env.db_URI

// user schema

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const User = mongoose.model('User', userSchema)

mongoose
    .set('strictQuery', false)
    .connect(url, function (err) {
        if (err) {
            console.log("err", err)
        }
    })

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/api/signup', function (req, res) {
    const { firstName, lastName, email, password, confirmPassword } = req.body
    // validating is all input filled data passed or not.
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.json({
            status: 'fail',
            message: 'All input fields are required!'
        })
    }

    bcrypt.hash(password, 12, function (err, hashedPassword) {
        if (err) {
            return res.json({
                status: 'fail',
                message: 'Error occurred while hashing password'
            })
        }

        req.body.password = hashedPassword

        User.create(req.body, function (err, user) {
            if (err || !user) {
                return res.json({
                    status: 'fail',
                    message: 'Failed to create new user'
                })
            }

            res.json({
                status: 'success',
                data: {
                    user,
                }
            })
        })
    })
})

app.post('/api/login', function (req, res) {
    const { email, password } = req.body
    // validating is all input filled data passed or not.
    if (!email || !password) {
        return res.json({
            status: 'fail',
            message: 'All input fields are required!'
        })
    }

    User.findOne({ email }, function (err, user) {
        if (err || !user) {
            // is no user found with email
            return res.json({
                status: 'fail',
                message: 'Invalid email or password!'
            })
        }

        bcrypt.compare(password, user.password, function (err, isCorrectPassword) {
            if (err || !isCorrectPassword) {
                // is password is incorrect
                return res.json({
                    status: 'fail',
                    message: 'Invalid email or password!'
                })
            }

            return res.json({
                status: 'success',
                data: {
                    user,
                }
            })
        })
    })
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})
