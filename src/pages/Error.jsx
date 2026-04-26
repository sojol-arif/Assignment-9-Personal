import React from 'react';
import Header from '../components/Header';
import { useEffect } from 'react';

const Error = () => {
    useEffect(() => {
        document.title = "Error - Page Not Found";
    }, []);

    return (
        <div>
            <div className='flex items-center justify-center h-[calc(100vh_-_85px)] px-5 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-[48px] md:text-[56px] lg:text-[72px] font-bold mb-4'>404 - Page Not Found</h1>
                    <p className='text-lg'>The page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
};

export default Error;