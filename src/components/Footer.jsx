import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#FAE0E7]'>
            <div className="text-[16px] p-10 flex justify-around border-dashed border-b-2 border-white">
                <div className='flex flex-col gap-1.5'>
                    <h3 className="font-bold mb-3 text-[20px] text-[#111]">Services</h3>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>   
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>  
                <div className='flex flex-col gap-1.5'>
                    <h3 className="font-bold mb-3 text-[20px] text-[#111]">Company</h3>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>      
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>  
                <div className='flex flex-col gap-1.5'>
                    <h3 className="font-bold mb-3 text-[20px] text-[#111]">Legal</h3>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <div className="flex gap-3 mt-5 social-icons">
                        <a className="link link-hover p-2 bg-[#004DAA] text-white rounded-full"><FaFacebookF /></a>
                        <a className="link link-hover p-2 bg-[#00B2F3] text-white rounded-full"><FaYoutube /></a>
                        <a className="link link-hover p-2 bg-[#FF0000] text-white rounded-full"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <p className='text-center text-sm py-4'>Copyright © 2024 - All right reserved by ToyVerse Ltd</p>
        </div>
    );
};

export default Footer;