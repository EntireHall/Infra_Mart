import React from 'react'
import "./style.css"
import "./responsive.css"
export default function Partner() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-20 font-chakra'>
                <div className='text-blue-600 text-xl font-semibold'>PARTNERS</div>
                <div className='font-extrabold text-black sm:text-5xl text-3xl  sm:w-[600px] w-full text-center'>Trusted By Some Of The
                    Largest Companies</div>
                <div className='flex flex-wrap justify-center gap-20 mt-10 mb-20'>
                    <div className='border border-neutral-400 bg-white sm:p-2 sm:w-[550px] sm:h-[200px]  h-[100px] w-[300px] sm:pt-10 pt-5 '><span className='digital-ocean sm:w-[500px] h-[60px] w-[295px] block sm:h-[150px]'></span></div>
                    <div className='border border-neutral-400 bg-white p-2 sm:w-[550px] sm:h-[200px]  h-[100px]  w-[300px] yealink'></div>
                </div>
            </div>
        </div>
    )
}
