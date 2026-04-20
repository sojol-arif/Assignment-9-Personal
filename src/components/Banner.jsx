import React from 'react';
import banner_img from '../assets/banner-img-1.png';

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
                        <button className='bg-white border-dashed border-1 text-primary font-bold py-2 px-4 rounded-[50px] hover:bg-gray-200 text-[18px] px-[30px] py-[13px]'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;