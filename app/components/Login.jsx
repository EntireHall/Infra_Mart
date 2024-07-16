"use client"
import React, { useContext, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: 'emilys', password: 'emilyspass', })
              })
            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                login(token);
                router.replace("../dashboard/home");
            } else {
                console.error('Authentication failed: wrong username or password');
                router.push("../Auth/Error");
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };
    return (
        <div>
            <div className='w-full h-full mt-20 flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='flex flex-col items-start gap-5 font-chakra max-w-5xl' >
                    <input
                        type='text'
                        placeholder='Enter username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className='border-2 bg-neutral-200 rounded-sm w-full focus:outline-none transition-all ease-in duration-300 delay-100 hover:border-blue-500 p-2 pr-20 cursor-pointer'
                    />
                    <input
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 bg-neutral-200 rounded-sm focus:outline-none transition-all ease-in duration-300 delay-100 hover:border-blue-500 p-2 pr-20 cursor-pointer'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 text-white font-bold font-chakra py-2 px-4 text-xl transition-all ease-in duration-300 delay-100 hover:bg-black hover:text-white hover:border-blue-500 hover:border-b-4'
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
}
