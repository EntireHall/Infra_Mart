import React from 'react'

export default function Home() {
    return (
        <div>
            <div>
                <div className='relative font-chakra tableHead bg-neutral-200 flex justify-center w-full items-center'>
                    <div className='relative'>
                        <div className='z-10 gap-y-2 absolute textDesign0 flex flex-col justify-center items-start flex-wrap xl:left-[400px] md:left-[100px]  xl:top-[-150px] md:top-[-150px] '>
                            <div className='text-blue-600 text-[20px] slide-in-top md:mb-8 w-full font-semibold textDesign1'>MOOL NETWORK!</div>
                            <div className='text-black text-6xl slide-in-left md:w-[700px] flex-wrap font-bold text-center md:text-left textDesign2'>Empowering Excellence in Every Volt</div>
                            <div className='slide-in-bottom mt-6 text-xl font-semibold max-sm:hidden flex items-start'>Your Low Voltage Solution Partner!</div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 relative w-full h-[800px] homeImage'>
                        {/* Background image one */}
                        <div className='background fade-in ' />
                        {/* Background image two */}
                        <div className='background2 slide-in-right' />
                    </div>
                    <div className='absolute inset-0 flex flex-col justify-center items-center'>
                        <div className='center-img' />
                        <div className='center-img2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
