'use client'
import React, { useState, useEffect } from 'react';
import "../components/style.css";
import Sider from './Sider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Preloader from './Preloader';
export default function Navbar() {
    const [loading, setLoading] = useState(true);
    const activepath = usePathname();

    const isActive = (path) => {
        return activepath === path;
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [activepath]);


    const Navlink = [
        { name: 'HOME', path: '/dashboard/home' },
        { name: 'ABOUT US', path: '/dashboard/about' },
        { name: 'SERVICES', path: '/dashboard/service' },
        { name: 'BLOGS', path: '/dashboard/blog' },
        { name: 'CONTACT US', path: '/dashboard/contact' }
    ];

    const [navbarClass, setNavbarClass] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const thresholdHeight = 100;

            if (scrollY > thresholdHeight) {
                setNavbarClass('fixed w-full top-0 z-20');
            } else {
                setNavbarClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            {loading && <Preloader />}
            <div className={`flex justify-center items-center h-[80px] bg-[#3147f3] ${navbarClass}`}>
                <div className='w-full max-w-screen-xl px-6'>
                    <div className='flex justify-between items-center'>
                        <div className='logo'></div>
                        <div className='flex justify-center items-center gap-x-10'>
                            <ul className='hidden lg:flex p-4 gap-x-10 text-sm text-white font-semibold font-chakra'>
                                {Navlink.map(({ path, name }) => (
                                    <li key={name}>
                                        <Link href={path} prefetch
                                            className={`${isActive(path) ? 'text-black font-bold underline underline-offset-2' : ' '} hover:text-neutral-300`}>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className=' items-center gap-8 sm:flex hidden'>
                                <div className='text-white hover:text-blue-200 text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z" /></svg></div>
                                <div className='text-white hover:text-blue-200 text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z" /></svg></div>
                                <div className='text-white hover:text-blue-200 text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33" /></svg></div>
                            </div>
                            <div className='lg:hidden flex'>
                                icon
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sider />
        </div>
    );
}
