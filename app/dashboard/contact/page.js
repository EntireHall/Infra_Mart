'use client'
import "../../components/style.css"
import "../../components/responsive.css"
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'
import Link from 'next/link'
export default function page() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        FormValidate();
    }, [name, email, password])
    const FormValidate = () => {
        let error = {};
        if (!name) {
            error.name = "Please Fill The Field";
        }
        if (!email) {
            error.email = "Please Fill The Field"
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Please Enter Valid Email (example@gmail.com)"
        }
        if (!password) {
            {
                error.password = "Please Fill The Field"
            }
        }
        else if (password.length < 6) {
            error.password = "Password Must Greater Than 6 Words"
        }
        setError(error);
        setIsFormValid(Object.keys(error).length === 0);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (isFormValid) {
            console.log('Form submitted successfully!', { name, email, password, error });
        } else {
            console.log('Form submitted without Data', { name, email, password, error });
        }
    };
    return (
        <div>
            <div>
                <div className='Nav-about relative'>
                    <div className='text-white md:text-6xl text-4xl font-bold font-chakra flex flex-col gap-y-2 justify-center items-center h-full bg-neutral-950/50'>Contact Us
                        <div className='flex md:text-[16px] text-[12px] items-center gap-1 font-chakra text-white'>
                            <Link href={"/"}><span className='cursor-pointer text-neutral-400 hover:text-white'>Home</span></Link>
                            <Icon className="text-blue-500" icon="oui:arrow-right" />Contact Us</div></div>
                </div>
                <div className='w-full flex justify-center items-center max-sm:px-4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 font-chakra font-semibold sm:gap-10 gap-5 sm:mt-40 mt-10'>
                        <div className='border-2 group sm:p-[30px] p-[10px] flex items-center justify-center sm:w-[400px] sm:h-[150px] max-sm:h-[120px] max-sm:w-full '>
                            <div className=' flex'>
                                <div className='hexagon flex items-center justify-center'><Icon icon="subway:location" className='sm:text-3xl  text-xl transition-transform ease-in duration-200 delay-100 group-hover:scale-125 ' style={{ color: '#004ecc' }} /></div>
                            </div>
                            <div className='ml-6 flex flex-col'>
                                <span className='sm:text-2xl text-lg font-bold'>Our Location</span>
                                <span className='text-neutral-500 font-grotesk font-normal flex sm:text-lg text-sm flex-wrap'>9188 122B Street, Surrey BC V3V 7M1 Canada.</span>
                            </div>
                        </div>
                        <div className='border-2 group sm:p-[30px] p-[10px] flex items-center sm:w-[400px] sm:h-[150px] max-sm:h-[120px] max-sm:w-full '>
                            <div className=' flex'>
                                <div className='hexagon flex items-center justify-center'><Icon icon="subway:location" className='sm:text-3xl  text-xl transition-transform ease-in duration-200 delay-100 group-hover:scale-125 ' style={{ color: '#004ecc' }} /></div>
                            </div>
                            <div className='ml-6 flex flex-col'>
                                <span className='sm:text-2xl text-lg font-bold'>Our Location</span>
                                <span className='text-neutral-500 font-grotesk font-normal flex sm:text-lg text-sm flex-wrap'>9188 122B Street, Surrey BC V3V 7M1 Canada.</span>
                            </div>
                        </div>
                        <div className='border-2 group sm:p-[30px] p-[10px] flex items-center sm:w-[400px] sm:h-[150px] max-sm:h-[120px] max-sm:w-full '>
                            <div className=' flex'>
                                <div className='hexagon flex items-center justify-center'><Icon icon="subway:location" className='sm:text-3xl  text-xl transition-transform ease-in duration-200 delay-100 group-hover:scale-125 ' style={{ color: '#004ecc' }} /></div>
                            </div>
                            <div className='ml-6 flex flex-col'>
                                <span className='sm:text-2xl text-lg font-bold'>Our Location</span>
                                <span className='text-neutral-500 font-grotesk font-normal flex sm:text-lg text-sm flex-wrap'>9188 122B Street, Surrey BC V3V 7M1 Canada.</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='mb-40 mt-40'>
                <div className='sm:flex  grid justify-start sm:ml-40  p-4 sm:gap-20 gap-10'>
                    <div className='flex flex-col font-chakra'><span className='font-bold sm:text-lg  text-blue-700'>CONTACT US</span>
                        <span className='sm:text-6xl max-sm:text-3xl font-extrabold '>Get in touch</span>
                        <span className='sm:w-[390px]  text-neutral-500 sm:text-lg  text-sm'>We provide professional services to clients in a particular area of expertise. We have a team of experts in various fields who can offer advice on a project or problem.</span>
                        <div className='flex flex-col w-full'>
                            <span className='p-[0.5px] mt-10 mb-10 w-full bg-black'></span>
                            <div className='flex  items-start gap-3'>
                                <div><Icon icon="svg-spinners:clock" className='text-5xl font-bold text-blue-600' /></div>
                                <div className='flex flex-col mt-2'>
                                    <span className='font-bold text-3xl mb-3'>Opening hour</span>
                                    <span className='text-neutral-500'>Monday - Sunday : 08:00am - 06:00pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-4xl font-bold font-chakra pb-5 mt-10'>Get a Quote</div>
                        <form onSubmit={handleSubmit}>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <div>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className=' p-3 sm:w-[380px] w-full bg-neutral-200/60 focus:outline-none' />
                                    {isSubmitted && <p className=' text-red-500 text-sm font-grotesk pt-1'>{error.name}</p>}
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className=' p-3 sm:w-[380px] w-full bg-neutral-200/60 focus:outline-none' />
                                    {isSubmitted && <p className=' text-red-500 text-sm font-grotesk pt-1'>{error.email}</p>}
                                </div>
                            </div>
                            <select className=' p-3 w-full mt-4 bg-neutral-200/60 focus:outline-none'>
                                <option className='text-neutral-500'>Service Interested</option>
                                <option className='text-neutral-500'>Low Voltage Services</option>
                                <option className='text-neutral-500'>IT Services</option>
                                <option className='text-neutral-500'>Web Development</option>
                                <option className='text-neutral-500'>Digital Marketing</option>
                            </select>
                            <textarea className='p-3 w-full mt-4 bg-neutral-200/60 focus:outline-none h-40' placeholder='Message'></textarea>
                            <input
                                type="submit"
                                value="POST COMMENT"
                                className={!isFormValid ? "cursor-pointer  flex items-center gap-x-3 border bg-blue-600 p-4 px-6 text-white font-semibold font-chakra text-lg mt-3"
                                    : "flex items-center cursor-pointer gap-x-3 border bg-blue-600 p-4 px-6 text-white font-semibold font-chakra text-lg mt-3 transition-all ease-in-out duration-200 delay-100 hover:text-white hover:bg-neutral-900"}
                            />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
