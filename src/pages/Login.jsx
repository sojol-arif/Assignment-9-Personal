import React from 'react';
import { Link } from 'react-router';
import { Navigation } from 'swiper/modules';
import { LiaChevronLeftSolid, LiaChevronRightSolid } from "react-icons/lia";
import google from '../assets/google.png';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const Login = () => {
    const { signIn, setUser, loading } = use(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        document.title = "Login | Toy Store";
    }, []);

    console.log(location);
    console.log(location.state);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // Implement login logic here using email and password
        signIn(email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in user:", user);
            setUser(user);
            navigate(location.state ? location.state : '/');
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className='flex items-center'>
            <div className='max-w-[1200px] mx-auto px-5 w-full'>
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-2.5">Account Login</h1>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl w-full sm:w-[450px]">
                        <form className="card-body" onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>

                                <Link to="/auth/register" className="mt-4 block text-center text-[14px]">
                                    Don't have an account? <span className="text-primary">Sign Up</span>
                                </Link>
                                <Link to="/shop" className="mt-4 block text-center text-[16px] border-dashed border-1 border-[#d8d8d8] py-2 rounded-[100px] hover:border-primary transition duration-300">
                                    <img src={google} alt="Google" className="w-5 h-5 inline mr-2   " />
                                    Continue with Google
                                </Link>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;