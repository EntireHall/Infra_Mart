import React from 'react';
import './style.css';

export default function About() {
    return (
        <>
            <div className='flex w-full justify-center mt-10 md:mt-20 font-chakra'>
                <div className='about-img'></div>
                <div className='px-6 md:px-10 mt-10 md:mt-20'>
                    <div className='text-blue-700 text-xl font-semibold pb-4'>ABOUT US</div>
                    <div className='text-3xl md:text-5xl text-black font-bold pb-5 w-[500px]'>Commitment to Excellence in Low Voltage IT Services</div>
                    <div className='text-xl md:text-base w-full md:w-[550px] text-neutral-500 pb-5'>At Mool Network, We are dedicated to delivering unparalleled Low Voltage & IT Services that exceed industry standards and meet the unique needs of our clients.</div>
                    <hr className='w-full md:w-[550px]'></hr>

                    <div className='flex mt-5 md:gap-14 gap-3 flex-wrap'>
                        <div className='w-fit'><div className='text-xl md:text-2xl w-fit text-black font-semibold flex items-center pb-2'><hr className='text-black'></hr>Quality Assurance</div>
                            <div className='text-base w-full md:w-[230px] text-neutral-500'>We adhere to rigorous quality assurance measures at every stage of our service delivery.</div></div>
                        <div><div className='text-xl md:text-2xl text-black font-semibold flex items-center pb-2'><hr className='text-black'></hr>Client-Centric Approach</div>
                            <div className='text-base w-full md:w-[270px] text-neutral-500'>We prioritize our clients' needs and objectives. Our commitment is to provide tailored solutions that align with their business goals</div></div>
                    </div>
                    <button className='p-2 px-6 bg-blue-700 text-white text-xl transition-all duration-150 delay-200 ease-in hover:bg-black hover:text-white mt-5'>MORE ABOUT</button>
                </div>
            </div>
        </>
    );
}
