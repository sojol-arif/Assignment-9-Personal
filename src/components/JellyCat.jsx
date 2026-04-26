import React from 'react';
import jellyCat from "../assets/Jellycat_Diner_June.jpg";
import { Link } from 'react-router';

const JellyCat = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='flex'>
                <div className='h-full w-[50%] max-w-[580px] p-13 text-white bg-[#00abd3eb] min-h-[550px] md:min-h-[650px] flex flex-col justify-center'>
                    <h2 className='text-[40px] uppercase mb-3 font-black'>Jellycat diner Bd!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dicta magni adipisci, minima vero nihil esse? Sunt deserunt dolorem quasi excepturi blanditiis quisquam, exercitationem reprehenderit vitae! Minus doloribus explicabo odit nihil autem similique voluptatum eum distinctio, molestias totam officia corrupti.</p>
                    <Link to="/toy-details/1" className="uppercase btn-primary rounded-full max-w-[fit-content] mt-5 pl-7 pr-7 pt-3 pb-3 inline-block bg-primary border-dashed broder-[#fff] border-1 text-[16px]">Shop Now!</Link>
                </div>
                <img src={jellyCat} alt=""  className='absolute left-0 top-0 object-cover z-[-1]'/>
            </div>
        </div>
    );
};

export default JellyCat;