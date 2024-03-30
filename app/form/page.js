'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Perform authentication logic here (e.g., sending a request to the server)
            // If authentication is successful, redirect to a protected route
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                router.push('/home'); // Redirect to the dashboard or any protected route
            } else {
                // Handle authentication failure (e.g., show error message)
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    return (
        <div>
            <div className='w-full h-full mt-20 flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='flex flex-col items-start gap-5 font-chakra'>
                    <input
                        type='text'
                        placeholder='Enter username'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='border-2 bg-neutral-200 rounded-sm focus:outline-none transition-all ease-in duration-300 delay-100 hover:border-blue-500  p-2 pr-20 cursor-pointer' />
                    <input
                        type='password' // Change to type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 bg-neutral-200 rounded-sm focus:outline-none transition-all ease-in duration-300 delay-100 hover:border-blue-500  p-2 pr-20 cursor-pointer' />
                    <button type='submit' className='bg-blue-500 text-white font-bold font-chakra py-2 px-4 text-xl transition-all ease-in duration-300 delay-100 hover:bg-black hover:text-white hover:border-blue-500 hover:border-b-4'>LOGIN</button>
                </form>
            </div>
        </div>
    );
}
