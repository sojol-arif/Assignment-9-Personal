import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import Loading from './Loading';
import { useState } from 'react'

const Header = () => { 
    const {user, logOut, loading} = use(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const photoLink = user?.photoURL;

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
                        <NavLink to="/" className="uppercase">Home</NavLink>
                        <NavLink to="/toy-details/1" className="uppercase">Toys</NavLink>
                        <NavLink to="/blog" className="uppercase">Blog</NavLink>
                        <NavLink to="/contact" className="uppercase">Contact</NavLink>
                    </ul>
                </div>
                <div className='flex items-center'>
                    {loading ? 
                    (<Loading></Loading>)
                    : 
                    (<>
                        {user?photoLink ? 
                        (<Link to="/profile" onMouseEnter={() => setIsHovered(true) }
                        onMouseLeave={() => setIsHovered(false)}>
                        
                            {isHovered ? <span> {user.displayName} </span> : <img src={user.photoURL} alt="Profile" className='w-10 h-10 rounded-full' /> }
                            
                        </Link> 
                        
                        )
                         :
                        ( <FaUser className='w-10 h-10 rounded-full' />) : null}

                        {user ? <Link to="/auth/logout" className='ml-2 btn btn-danger' onClick={handleLogout}>Logout</Link> : (
                            <>
                            <Link to="/auth/login" className='ml-2 btn btn-primary'>Login</Link><Link to="/auth/register" className='ml-2 btn btn-secondary'>Register</Link>
                            </>
                        )}
                    </>)}
                </div>
            </div>
        </div>
    );
};

export default Header;