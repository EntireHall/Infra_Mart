'use client'
import React from 'react'
import "../components/style.css"
import { Icon } from '@iconify/react'
import Link from 'next/link'
export default function page() {
    return (
        <div>
            <div className='Nav-about relative'>
                <div className='text-white text-6xl font-bold font-chakra flex flex-col gap-y-2 justify-center items-center h-full bg-neutral-950/50'>ABOUT US
                    <div className='flex text-[16px] items-center gap-1 font-chakra text-white'>
                        <Link href={"/"}><span className='cursor-pointer text-neutral-400 hover:text-white'>Home</span></Link>
                        <Icon className="text-blue-500" icon="oui:arrow-right" />About Us</div></div>
            </div>

            <div>
                <div className='grid grid-cols-2 mt-20  font-chakra cursor-auto h-full'>
                    <div className='about-img h-full w-[50%]'></div>
                    <div>
                        <div className='flex flex-col gap-y-4 mb-6 mt-20'>
                            <span className='text-xl text-blue-700 font-bold'>ABOUT MOOL NETWORK</span>
                            <span className='text-3xl font-extrabold w-[500px]'>Empowering Your Connectivity
                                with Low Voltage Solutions</span>
                            <span className='text-neutral-500 text-xl w-[600px]'>Welcome to Mool Network, where innovation meets reliability in the realm of low voltage solutions. As a premier provider of cutting-edge technology and services, we specialize in delivering tailored low voltage solutions that empower your connectivity needs.</span>
                        </div>
                        <div className='flex flex-col  gap-y-5'>
                            <span className='p-[0.5px] w-[600px] bg-neutral-300' />
                            <div class='group'>
                                <div class='flex items-center pt-4 pb-6'>
                                    <span class='p-[1px] w-[0px]  bg-white transition-all ease-in-out  duration-300 delay-200 group-hover:bg-blue-600 group-hover:w-[40px] group-hover:mr-[30px]'></span>
                                    <span class='text-2xl font-bold'>Our Vision</span>
                                </div>
                                <div class='text-lg text-neutral-700 w-[395px]'>At Mool Network, we envision a connected world where technology seamlessly integrates into our daily lives, enhancing efficiency, security, and overall well-being. Our mission is to be at the forefront of this transformation, offering state-of-the-art low voltage solutions that bridge the gap between innovation and practical implementation.</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='flex gap-10 justify-center items-center m-auto mt-20 h-screen'>
                            <div class='group'>
                                <div class='bg-neutral-50 border-2 border-neutral-200/20 shadow-md w-[350px] transition-all duration-300 ease-in-out transform-gpu group-hover:py-[25px] group-hover:bg-[#231f42f3] group-hover:border-2 group-hover:border-blue-600'>
                                    <div class='flex flex-col mt-5 font-chakra p-10 gap-y-5 group'>
                                        <div class='flex justify-start'>
                                            <div class='hexagon2 flex items-center justify-center'><Icon icon="material-symbols:camera-video" className='text-4xl text-white' /></div>
                                        </div>
                                        <span class='text-3xl pt-5 font-extrabold text-black group-hover:text-white transition-all ease-in-out duration-200 cursor-pointer delay-100 hover:text-blue-600'>Expertise</span>
                                        <span class='text-md text-neutral-400 group-hover:text-white'>In a rapidly evolving technological landscape, we stay ahead of the curve by embracing innovation. From advanced surveillance systems to smart home automation, our solutions are designed to keep you on the cutting edge.</span>
                                        <div class='border-2 p-5 w-fit text-xl text-white opacity-0 transition-all duration-200 delay-100 ease-in-out group-hover:opacity-100 hover:bg-blue-500'><Icon icon="fe:arrow-right" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class='group'>
                                <div class='bg-neutral-50 border-2 border-neutral-200/20 shadow-md w-[350px] transition-all duration-300 ease-in-out transform-gpu group-hover:py-[25px] group-hover:bg-[#231f42f3] group-hover:border-2 group-hover:border-blue-600'>
                                    <div class='flex flex-col mt-5 font-chakra p-10 gap-y-5 group'>
                                        <div class='flex justify-start'>
                                            <div class='hexagon2 flex items-center justify-center'><Icon icon="material-symbols:camera-video" className='text-4xl text-white' /></div>
                                        </div>
                                        <span class='text-3xl pt-5 font-extrabold text-black group-hover:text-white transition-all ease-in-out duration-200 cursor-pointer delay-100 hover:text-blue-600'>Expertise</span>
                                        <span class='text-md text-neutral-400 group-hover:text-white'>In a rapidly evolving technological landscape, we stay ahead of the curve by embracing innovation. From advanced surveillance systems to smart home automation, our solutions are designed to keep you on the cutting edge.</span>
                                        <div class='border-2 p-5 w-fit text-xl text-white opacity-0 transition-all duration-200 delay-100 ease-in-out group-hover:opacity-100 hover:bg-blue-500'><Icon icon="fe:arrow-right" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class='group'>
                                <div class='bg-neutral-50 border-2 border-neutral-200/20 shadow-md w-[350px] transition-all duration-300 ease-in-out transform-gpu group-hover:py-[25px] group-hover:bg-[#231f42f3] group-hover:border-2 group-hover:border-blue-600'>
                                    <div class='flex flex-col mt-5 font-chakra p-10 gap-y-5 group'>
                                        <div class='flex justify-start'>
                                            <div class='hexagon2 flex items-center justify-center'><Icon icon="material-symbols:camera-video" className='text-4xl text-white' /></div>
                                        </div>
                                        <span class='text-3xl pt-5 font-extrabold text-black group-hover:text-white transition-all ease-in-out duration-200 cursor-pointer delay-100 hover:text-blue-600'>Expertise</span>
                                        <span class='text-md text-neutral-400 group-hover:text-white'>In a rapidly evolving technological landscape, we stay ahead of the curve by embracing innovation. From advanced surveillance systems to smart home automation, our solutions are designed to keep you on the cutting edge.</span>
                                        <div class='border-2 p-5 w-fit text-xl text-white opacity-0 transition-all duration-200 delay-100 ease-in-out group-hover:opacity-100 hover:bg-blue-500'><Icon icon="fe:arrow-right" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-[#14193c] w-full h-[45rem] font-chakra mt-40 mb-32'>
                        <div className='flex flex-col text-center pt-28 mb-16 gap-y-2 items-center justify-center'>
                            <span className='text-lg text-blue-600 font-bold'>HOW IT WORKS</span>
                            <span className='text-5xl font-extrabold w-[600px] text-white'>Easy Steps For a Clean
                                Inside & Outside.</span>
                        </div>
                        <div className='flex items-center gap-x-28 justify-center'>
                            <div className='flex flex-col items-center'>
                                <span className='image-one' />
                                <span className='text-2xl text-white font-chakra font-bold block w-[150px] text-center'>Get Your
                                    Free Quotes</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='image-two' />
                                <span className='text-2xl text-white font-chakra font-bold block w-[170px] text-center'>
                                    Appointment &
                                    Consultation</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='image-three' />
                                <span className='text-2xl text-white font-chakra font-bold block w-[150px] text-center'>Capture Your
                                    Requirement</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='image-four' />
                                <span className='text-2xl text-white font-chakra font-bold block w-[150px] text-center'>
                                    Install
                                    Your CCTV</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-40 mb-20'>
                <div className='bg-[#14193c] w-[80%] text-white h-[190px] '>
                    <div className='flex items-center w-full gap-10  h-full justify-center'>
                        <div className='flex   text-3xl font-chakra font-extrabold flex-col'><div>We are<span className='text-amber-600 pl-1 pr-1'>No. #1 Low Voltage</span></div><span>And IT Services</span></div>
                        <div><span className='artitect-img mt-7' /></div>
                        <div className='flex   text-2xl font-chakra font-extrabold flex-col'>
                            <div className='flex items-center gap-x-1'><div className='text-blue-600'>Call Now : </div>(+1236) 885-2533</div>
                            <div className='text-base'>Same-Day Appointments Available</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
