import React from 'react';
import banner_img from '../assets/banner-img-1.png';
import { Link } from 'react-router';

const Banner = () => {
    return (
       <div className='bg-[linear-gradient(78deg,#ffcf78_5%,#ffcf78_97%)]'>
            <div className='max-w-[1200px] mx-auto px-5'>
                <div className='flex align-middle items-center gap-10 w-full pt-10 pb-10'>
                    <div className='banner_right flex-1'>
                        <img className='max-w-[556px]' src={banner_img} alt="Banner" />
                    </div>
                    <div className='banner_left flex-1'>
                        <h2 className='text-[55px] font-extrabold mb-4'>The Best Kids Toy Store in the City</h2>
                        <p className='text-[28px] mb-8'>From <span className='font-extrabold text-[#E92530]'>$42.99</span></p>
                        <Link to="/toy-details/2" className='bg-white border-dashed border-1 text-primary py-2 px-4 rounded-[50px] hover:bg-primary hover:text-[#fff] text-[16px] px-[30px] py-[13px] inline-block uppercase duration-300 ease-in-out'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;