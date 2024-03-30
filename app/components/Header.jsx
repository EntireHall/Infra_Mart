import Link from 'next/link';
import React from 'react'
export default function Header() {
    return (
        <div className='flex justify-center items-center py-4 bg-[#14193c] text-white font-chakra'>
            <div className='w-full max-w-[1200px] px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col md:flex-row gap-2 justify-between text-[14px]'>
                        <div className='flex items-center gap-1 mr-8'>
                            <svg className="text-blue-600 text-2xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                            </svg>service@moolnet.ca
                        </div>
                        <div className='flex items-center gap-1 pr-10'>
                            <svg className="text-blue-600 text-2xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" /></svg>#9188 122B Street, Surrey BC V3V 7M1 Canada
                        </div>
                        <div className='flex items-center gap-1 pr-40'>
                            <svg className="text-blue-600 text-2xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999" />
                                <path fill="currentColor" d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5zm3.422
                                5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1
                                1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301
                                6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0
                                .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391z" /></svg>+1 236-885-2533
                        </div>
                    </div>

                    <div className='text-base font-semibold flex items-center gap-1 transition-colors text-blue-600 ease-in-out duration-200 delay-300 hover:text-white mt-4 md:mt-0'>
                        GET A QUOTE<svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m14 7l-5 5m0 0l5 5" /></svg>
                    </div>
                    <div>
                        <Link href={"/form"}>
                        <button>LOGIN</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
