import React from 'react';
import { useLoaderData } from 'react-router';

import { AuthContext } from '../provider/AuthProvider';
import { useParams } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ToyDetails = () => {
    const toys = useLoaderData();
    const toyIdS = useParams().toyId;

    const toy = toys.find(toyy => toyy.toyId == toyIdS);

    const { toyName, pictureURL, description, price, rating } = toy;

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='max-w-[1200px] mx-auto px-5 w-full'>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={pictureURL} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{toyName}</h2>
                            <p>{description}</p>
                            <p>Price: ${price}</p>
                            <p>Rating: {rating}</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default ToyDetails;