import React, { useState } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('user') !== null
    );

    const signin = user => {
        localStorage.setItem('user', JSON.stringify(user));
        setIsAuthenticated(true);
    };

    const signout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    return { isAuthenticated, signin, signout };
};

export default useAuth;
