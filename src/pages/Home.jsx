import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import Product from '../components/Product';

const Home = () => {
    const toys = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Product toys={toys}></Product>
        </div>
    );
};

export default Home;