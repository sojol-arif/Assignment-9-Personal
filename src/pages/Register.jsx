import React from 'react';
import { Link } from 'react-router';
import { Navigation } from 'swiper/modules';
import { LiaChevronLeftSolid, LiaChevronRightSolid } from "react-icons/lia";
import google from '../assets/google.png';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const Register = () => {
    const {createUser, setUser} = use(AuthContext);

    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleLogin = () => {
        // Implement Google login logic here
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user);
                setUser(user);
                navigate('/');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(errorCode, errorMessage, email);
            });
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email, password).then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className='flex items-center'>
            <div className='max-w-[1200px] mx-auto px-5 w-full'>
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-2.5">Account Registration</h1>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl w-full sm:w-[450px]">
                        <form className="card-body" onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className='label'>Photo</label>
                                <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>

                                <Link to="/auth/login" className="mt-4 block text-center text-[14px]">
                                    Already have an account? <span className="text-primary">Log in</span>
                                </Link>
                                <button type="button" onClick={handleGoogleLogin} className="mt-4 block text-center text-[16px] border-dashed border-1 border-[#d8d8d8] py-2 rounded-[100px] hover:border-primary transition duration-300">
                                    <img src={google} alt="Google" className="w-5 h-5 inline mr-2   " />
                                    Continue with Google
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;