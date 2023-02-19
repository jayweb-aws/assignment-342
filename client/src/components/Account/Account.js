import React, { useEffect, useState } from 'react';
import './Account.css';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Account = () => {
    const { user } = useSelector(state => state.auth);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
    }, [user])

    return (
        <>
            <div className="container">
                <div className="userCard cardWidth">
                    <div className="profile-tab-nav border-right">
                        <div className="pp-4">
                            <div className="img-circle text-center mb-3">
                                <MdAccountCircle />
                            </div>
                            <h4 className="text-center">{user.firstName} {user.lastName}</h4>
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <i className="fa">
                                        <BsFacebook />
                                    </i>
                                    <i className="fa">
                                        <BsLinkedin />
                                    </i>
                                    <i className="fa">
                                        <BsInstagram />
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content pp-4 p-md-5" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="account"
                            role="tabpanel"
                            aria-labelledby="account-tab"
                        >
                            <h3 className="myb-3 h3">Account Settings</h3>
                            <div className="cardRow">
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            className="form-cont"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Last Name</label>
                                        <input type="text" className="form-cont" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Email</label>
                                        <input type="text" className="form-cont" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Phone number</label>
                                        <input type="text" className="form-cont" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Company</label>
                                        <input type="text" className="form-cont" value={company} onChange={(e) => setCompany(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Designation</label>
                                        <input type="text" className="form-cont" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="cardRow-md-12">
                                <div className="form-gp">
                                    <label>Bio</label>
                                    <textarea className="form-cont" rows="4" value={bio} onChange={(e) => setBio(e.target.value)} ></textarea>
                                </div>
                            </div>
                            <div className='cta-flex'>
                                <button className="cta-b">Update</button>
                                <button className="cta-c">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;