import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#FAE0E7]'>
            <div className="footer p-10 flex justify-around border-dashed border-b-2 border-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>   
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>  
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>      
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>  
                <div>
                    <span className="footer-title">Legal</span>

                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <p className='text-center text-sm py-4'>Copyright © 2024 - All right reserved by ToyVerse Ltd</p>     

        </div>
    );
};

export default Footer;