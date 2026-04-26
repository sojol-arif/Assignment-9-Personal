import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdStar } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Reviews = () => {
    return (
        <div className='max-w-[100%] mx-auto px-5 w-full'>
            <div className='mt-12 lg:mt-20 mb-15 lg:mb-25'>
                <h2 className='text-[28px] md:text-[36px] uppercase text-center text-secondary mb-7 lg:mb-12 font-black'>Reviews From Our Customers</h2>
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        breakpoints={{
                            768: {
                                slidesPerView:2,
                                spaceBetween: 00,
                            },
                        }}
                        className="reviewSwiper"
                    >
                        <SwiperSlide className='px-0 md:px-5 lg:px-10'>
                            <div className='flex flex-col items-center gap-3'>
                                <p className='text-center text-[18px] mb-3 font-bold'>Your website has been incredibly helpful for someone like me who started collecting Jellycat a bit late! I’ve always admired the quality of your plush toys, and I’ve visited your New York store several times—each visit has been a great experience with an amazing selection. I truly appreciate the years you’ve spent offering such beautiful, high-quality plush toys and gifts.</p>
                                <div className='flex gap-1'>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                </div>
                                <div className='text-[16px]'>Susan A.</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='px-0 md:px-5 lg:px-10'>
                            <div className='flex flex-col items-center gap-3'>
                                <p className='text-center text-[18px] mb-3 font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veritatis sint quas! Molestiae, </p>
                                <div className='flex gap-1'>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                </div>
                                <div className='text-[16px]'>Intisan D.</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='px-0 md:px-5 lg:px-10'>
                            <div className='flex flex-col items-center gap-3'>
                                 <p className='text-center text-[18px] mb-3 font-bold'>The checkout was quick and hassle-free, and my package arrived on time in excellent condition. Overall, it was a smooth and satisfying experience from beginning to end. </p>
                                <div className='flex gap-1'>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                </div>
                                <div className='text-[16px]'>Devi M.</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='px-0 md:px-5 lg:px-10'>
                            <div className='flex flex-col items-center gap-3'>
                                <p className='text-center text-[18px] mb-3 font-bold'>Toy Soldier Plush Bear – It’s absolutely charming! I first spotted it in your New York store window and instantly fell in love. After returning home to Nevada, I ordered it online and was amazed</p>
                                <div className='flex gap-1'>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                    <span><IoMdStar className='w-5 h-5 text-secondary' /></span>
                                </div>
                                <div className='text-[16px]'>Adnan C.</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Reviews;