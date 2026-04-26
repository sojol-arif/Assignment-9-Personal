import React from 'react';
import { useLoaderData } from 'react-router';

import { AuthContext } from '../provider/AuthProvider';
import { useParams } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { Link } from 'react-router';
import Feedback from '../components/Feedback';

import { IoMdStar } from "react-icons/io";

const ToyDetails = () => {

    const toys = useLoaderData();
    const toyIdS = useParams().toyId;

    const toy = toys.find(toyy => toyy.toyId == toyIdS);

    const { toyName, pictureURL, description, price, rating, subCategory } = toy;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        if (name && email) {
            toast("Thank you for trying the toy!");
        }
    }

    useEffect(() => {
        document.title = "Toy Details";
    }, []);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='max-w-[1200px] mx-auto px-5 w-full toy-details'>
                    <div className="bg-base-100 mt-5 my-12 md:my-20 flex flex-col md:flex-row gap-7 lg:gap-10">
                        <figure className='max-w-[50%]'><img src={pictureURL} alt="Movie" /></figure>
                        <div className="flex flex-col items-start">
                            <div className='uppercase font-medium uppercase'>{subCategory}</div>
                            <h2 className="card-title text-[24px] sm:text-[30px] lg:text-[42px] font-black mt-3">{toyName}</h2>
                            <div className='flex gap-2 mt-3 items-center'>
                                <span className='inline-flex'>
                                    <span><IoMdStar className='w-6 h-6 text-secondary' /></span>
                                    <span><IoMdStar className='w-6 h-6 text-secondary' /></span>
                                    <span><IoMdStar className='w-6 h-6 text-secondary' /></span>
                                    <span><IoMdStar className='w-6 h-6 text-secondary' /></span>
                                    <span><IoMdStar className='w-6 h-6 text-secondary' /></span>
                                </span>
                                <span>11 Reveiws</span>
                            </div>
                            <p className='text-[18px] md:text-[24px] lg:text-[32px] font-medium mt-3'>${price}</p>
                            <p className='mt-5'>{description}</p>
                            <Link to="/" className='border border-1 bg-transparent px-12 py-3 mt-5 rounded-full font-bold hover:bg-primary duration-300 ease hover:text-[#fff] '>Add to Cart</Link>
                        </div>
                    </div>
                    <form action="" className='w-full max-w-[400px] mx-auto mb-25' onSubmit={handleSubmit}>
                        <fieldset className='mb-5'>
                            <h3 className='text-lg font-black mb-3 text-center text-[36px]'>Try Now Toy</h3>
                            <div className='flex flex-col gap-3'>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full h-12" required />
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full h-12" required />
                                <button className='btn btn-primary self-start text-[#fff] rounded-full px-15 uppercase mt-2 mx-auto'>Try Now</button>
                            </div>
                        </fieldset>
                    </form>
                    <Feedback></Feedback>
                    <ToastContainer
                        position="bottom-right"
                    />
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default ToyDetails;