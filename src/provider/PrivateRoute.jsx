import React from 'react';
import { Navigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext);
    const location = useLocation();

    if(user && user.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;