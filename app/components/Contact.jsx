import React from 'react'
import "./style.css"
export default function Contact() {
    return (
        <>
            <div className=''>
                <div className='contact-img relative text-white flex justify-center items-center'>
                    <div className='absolute rotate-45  top-[18%] left-[22%]'><svg xmlns="http://www.w3.org/2000/svg" width="6em" height="10em" viewBox="0 0 16 16"><path fill="white" d="M12 13h-2L5 8l5-5h2L7 8z" /></svg></div>
                    <div className='flex flex-col absolute gap-4 text-white cursor-pointer justify-center items-center text-center'>
                        <div className='text-xl  font-chakra font-semibold'>LET'S WORK TOGETHER</div>
                        <div className='text-7xl font-chakra font-bold '>+1 236-885-2533</div>
                        <div className='text-2xl font-semibold w-[500px] text-center'>What are you waiting for to register and start
                            this new adventure?</div>
                    </div>
                    <div className='absolute rotate-45  bottom-[18%] right-[22%]'><svg xmlns="http://www.w3.org/2000/svg" width="6em" height="10em" viewBox="0 0 16 16"><path fill="white" d="M4 13h2l5-5l-5-5H4l5 5z" /></svg></div>
                </div>
            </div>
        </>
    )
}
