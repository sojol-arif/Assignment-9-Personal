import React from 'react';
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router';

const ProductCard = ({ toy }) => {

    const { toyId,
        toyName,
        sellerName,
        sellerEmail,
        subCategory, price, rating, availableQuantity, description, pictureURL
     } = toy;
    return (
        <Link to={`/toy-details/${toyId}`} className=' flex flex-col justify-center items-center'>
            <img className='max-w-[235px] max-h-[235px] w-full h-full object-cover' src={pictureURL} alt={toyName} />
            <p className='text-accent text-[14px] mt-4'>{subCategory}</p>
            
            <h2 className='text-[20px] font-bold text-center'>{toyName}</h2>
            <div className='text-[#F8CD2E] flex items-center gap-0'>
                <IoMdStar className='w-[15px] h-[14px]'/>
                <IoMdStar className='w-[15px] h-[14px]'/>
                <IoMdStar className='w-[15px] h-[14px]'/>
                <IoMdStar className='w-[15px] h-[14px]'/>
                <IoMdStar className='w-[15px] h-[14px]'/>&nbsp;
                <span className='text-[14px] text-accent'> ({rating})</span>
            </div>
            <p className='text-accent text-[14px]'>{availableQuantity}</p>
            <p className='font-bold'>${price.toFixed(2)}</p>
            <button className='bg-white border-primary border-dashed border-1 text-primary py-2 px-4 rounded-[100px] hover:bg-opacity-80 transition duration-300 mt-2'>
                View More
            </button>
        </Link>
    );
};

export default ProductCard;