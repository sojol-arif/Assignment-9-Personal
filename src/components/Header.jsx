import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const Header = () => { 
    const {user, logOut} = use(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    };


    return (
        <div className='max-w-[1200px] mx-auto px-5'>
            <div className='flex justify-between items-center py-5'>
                <div className="logo-part">
                    <Link to="/" className='text-[30px] font-black'>EcoToy</Link>
                </div>
                <div>
                    <ul className="menu-part flex gap-5">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/toy-details/1">Toys</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <div className='flex'>
                    {user ? <span><FaUser /></span> : ""}
                    {user ? <Link to="/auth/logout" className='ml-2 btn btn-danger' onClick={handleLogout}>Logout</Link> : (
                        <>
                         <Link to="/auth/login" className='ml-2 btn btn-primary'>Login</Link><Link to="/auth/register" className='ml-2 btn btn-secondary'>Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;