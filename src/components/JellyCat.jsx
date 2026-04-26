import React from 'react';
import jellyCat from "../assets/Jellycat_Diner_June.jpg";
import { Link } from 'react-router';

const JellyCat = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='h-full w-[50%] md:w-[50%] lg:w-[50%] md:max-w-[580px] py-12 px-5 lg:px-13 text-white bg-[#00abd3eb] flex flex-col justify-center w-full'>
                    <h2 className='text-[30px] lg:text-[40px] uppercase mb-3 font-black'>Jellycat diner Bd!</h2>
                    <p className='text-[14px] lg:text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nisi ea repudiandae quisquam aperiam, possimus quaerat rerum quam quia vitae alias eligendi? Aperiam deserunt voluptatem alias exercitationem. Cumque iste magni saepe a sed, modi numquam perferendis facere voluptate, ipsam voluptatem consequuntur explicabo est tenetur? Inventore pariatur voluptatum unde maxime corporis ipsum ullam sunt placeat, dicta optio vel delectus, animi, magnam odio natus provident et molestiae laborum totam voluptate perspiciatis maiores facilis? </p>
                    <Link to="/toy-details/1" className="uppercase btn-primary rounded-full max-w-[fit-content] mt-5 pl-7 pr-7 pt-3 pb-3 inline-block bg-primary border-dashed broder-[#fff] border-1 text-[16px]">Shop Now!</Link>
                </div>
                <img src={jellyCat} alt=""  className='min-h-[350px] sm:h-[550px] xl:h-[550px] md:absolute left-0 top-0 object-cover z-[-1] w-full'/>
            </div>
        </div>
    );
};

export default JellyCat;