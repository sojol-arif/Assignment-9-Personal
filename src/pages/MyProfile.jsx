import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const MyProfile = () => {
    const { user, logOut, setUser, updateUserProfile} = use(AuthContext);
    console.log("Check user in MyProfile:", user);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "My Profile | Toy Store";
    }, []);

    const handleUpdate = (e) => {
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        updateUserProfile({ displayName: name, photoURL: photo }).
        then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
        }).catch((error) => {
            // An error occurred
            // ...
            setUser(user);
            console.log("Profile update error", error);
        });
    }

    const handleLogout = (e) => {
        e.preventDefault();
        logOut().then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
            console.error("Logout Error:", error);
        });
    };
    return (
        <div className='min-h-screen'>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='bg-gray-100'>
                    <div className='max-w-[1200px] mx-auto py-10 px-5 mb-10'>
                        <h1 className='text-4xl font-bold mb-4'>My Account</h1>
                        <p className='text-gray-700 text-[20px]'>Manage your account details and settings</p>
                    </div>
                </div>
                <div className="flex justify-center w-full py-5 max-w-[1200px] mx-auto gap-10 px-5">
                    <div className='flex-1 max-w-[250px]'>
                        <div className='flex flex-wrap items-center gap-4'>
                            <span><img src={user?.photoURL} alt="Profile" className='w-16 h-16 rounded-full object-cover' /></span>
                            <span className='text-[1rem] font-medium'>{user?.displayName}</span>
                            <span className='text-[1rem] font-medium'>{user?.email}</span>
                        </div>
                        <ul className='list-none mt-4 border-t border-r border-l border-gray-300'>
                            <li className='mb-2 border-b p-3 border-gray-300'><NavLink to="/dashboard" className="font-medium text-primary uppercase">Dashboard</NavLink></li>
                            <li className='mb-2 border-b p-3 border-gray-300'><NavLink to="/orders" className="font-medium text-primary uppercase">Order</NavLink></li>
                            <li className='mb-2 border-b p-3 border-gray-300'><NavLink to="/orders" className="font-medium text-primary uppercase">Toys</NavLink></li>
                            <li className='mb-2 border-b p-3 border-gray-300'><NavLink to="/orders" className="font-medium text-primary uppercase">Account Details</NavLink></li>
                            <li className='mb-2 border-b p-3 border-gray-300'><NavLink onClick={handleLogout} className="font-medium text-primary uppercase">Logout</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <form onSubmit={handleUpdate}>
                            <fieldset className='border border-gray-300 rounded-md p-5 flex flex-col gap-2'>
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Name" />
                                <label className='label'>Photo</label>
                                <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                                <button className="btn btn-neutral mt-4">Save Changes</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyProfile;