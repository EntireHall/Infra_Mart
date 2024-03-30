'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Blog from '../components/Blog'
export default function page() {
    return (
        <div>
            <div className='Nav-about relative'>
                <div className='text-white md:text-6xl text-4xl font-bold font-chakra flex flex-col gap-y-2 justify-center items-center h-full bg-neutral-950/50'>BLOGS
                    <div className='flex md:text-[16px] text-[12px] items-center gap-1 font-chakra text-white'>
                        <Link href={"/"}><span className='cursor-pointer text-neutral-400 hover:text-white'>Home</span></Link>
                        <Icon className="text-blue-500" icon="oui:arrow-right" />Blogs</div></div>
            </div>
            <div className='mb-20'>
                <Blog />
            </div>
        </div>
    )
}
