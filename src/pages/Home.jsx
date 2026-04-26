import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import Product from '../components/Product';
import { useEffect } from 'react';
import JellyCat from '../components/JellyCat';
import Reviews from '../components/Reviews';

const Home = () => {
    const toys = useLoaderData();

    useEffect(() => {
        document.title = "Home | Toy Store";
    }, []);

    return (
        <div>
            <Banner></Banner>
            <Product toys={toys}></Product>
            <JellyCat></JellyCat>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;