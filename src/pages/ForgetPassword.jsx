import React, { useState } from 'react';
import Header from '../components/Header';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const ForgetPassword = () => {
    const { user, forgotPassword } = use(AuthContext);
    console.log(user);
    console.log('user Forget Password');

    const location = useLocation();
    const [email, setEmail] = useState("");

    console.log(location, "location");
    console.log(location.state, "location state");

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);

        forgotPassword(email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='bg-gray-100'>
                    <div className='max-w-[1200px] mx-auto py-10 px-5 mb-10'>
                        <h1 className='text-4xl font-bold mb-4 text-center text-primary'>My Account</h1>
                    </div>
                </div>
                <div className='max-w-[1200px] mx-auto px-5 py-5'>
                    <form onSubmit={handleResetPassword} className='mb-15'>
                        <fieldset className='flex flex-col'>
                            <label className="label font-bold mb-3">Email *</label>
                            <input type="email" name='email' className="input w-full md:w-[48%] mb-5" placeholder="Email" required value={email} onChange={(e)=> setEmail(e.target.email) } />
                            <button type="submit" className='max-w-fit btn bg-primary/20 uppercase tracking-wide font-bold'>Reset Password</button>
                        </fieldset>
                    </form>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ForgetPassword;