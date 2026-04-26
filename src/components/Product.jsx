import React from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Suspense } from 'react';
import { LiaChevronLeftSolid, LiaChevronRightSolid } from "react-icons/lia";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Product = ({ toys }) => {

    // Popular Toys
    const popularToys = toys.filter(toy=> toy.popular == true);

    return (
        <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
            <div className='max-w-[1200px] mx-auto px-5 mt-15 md:mt-20 mb-20 md:mb-25'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.popular_slider_prev',
                        prevEl: '.popular_slider_next',
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {popularToys.map(toy=> <SwiperSlide><ProductCard key={toy.toyId} toy={toy}></ProductCard></SwiperSlide>)}
                    <button className="popular_slider_prev text-primary">
                        <LiaChevronLeftSolid />
                    </button>
                    <button className="popular_slider_next text-primary">
                        <LiaChevronRightSolid />
                    </button>
                </Swiper>
            </div>
        </Suspense>
    );
};

export default Product;