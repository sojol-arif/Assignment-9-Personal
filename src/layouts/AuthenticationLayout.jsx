import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const AuthenticationLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthenticationLayout;