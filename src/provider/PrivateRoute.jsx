import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading'

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    console.log("Check PrivateRoute", user);

    const location = useLocation();

    if(loading) {
        return <Loading></Loading>;
    }

    if(user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;