import React from 'react';
import { useLoaderData } from 'react-router';

import { AuthContext } from '../provider/AuthProvider';
import { useParams } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

const ToyDetails = () => {

    const toys = useLoaderData();
    const toyIdS = useParams().toyId;

    const toy = toys.find(toyy => toyy.toyId == toyIdS);

    const { toyName, pictureURL, description, price, rating } = toy;

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
                    <div className="card card-side bg-base-100 shadow-xl mt-5 my-20">
                        <figure className='max-w-[50%]'><img src={pictureURL} alt="Movie" /></figure>
                        <div className="card-body flex items-start">
                            <h2 className="card-title">{toyName}</h2>
                            <p>{description}</p>
                            <p>Price: ${price}</p>
                            <p>Rating: {rating}</p>
                        </div>
                    </div>
                    <form action="" className='w-full max-w-[400px] mx-auto' onSubmit={handleSubmit}>
                        <fieldset className='mb-5'> 
                            <h3 className='text-lg font-bold mb-3'>Try Now Toy</h3>
                            <div className='flex flex-col gap-3'>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" />
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />
                                <button className='btn btn-primary self-start text-[#fff]'>Try Now</button>
                            </div>
                        </fieldset>
                    </form>
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