//store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';

// configuring redux store
export const store = configureStore({
    // reducer prop can get multiple reducers separated by commas
    reducer: {
        auth: authReducer
    },
    devTools: true
})


