import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Loading from './Loading';

export default function Blog() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4); // Number of posts per page
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [currentPage]); // Fetch data whenever currentPage changes

    const fetchData = async () => {
        const BASEURL = 'https://dummyjson.com/posts';
        try {
            setLoading(true);
            const response = await axios.get(BASEURL);
            setData(response.data.posts);
            setLoading(false);
        }catch (error) {
            setLoading(false);
            console.error('Error fetching data:', error);
        }
    };
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Get current posts
    const currentPosts = data.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <div className='mt-20'>
            {/* <div className='flex flex-col justify-between sm:px-44 px-10'>
                <div className='text-lg font-bold text-blue-600 font-chakra'>BLOG</div>
                <div className='flex items-center justify-between'>
                    <span className='text-5xl font-extrabold font-chakra cursor-pointer text-black '>RECENT NEWS</span>
                    <span className='p-4 px-8 border border-neutral-500 transition-all ease-in duration-100 delay-200 hover:bg-black font-chakra hover:text-white'> READ MORE {'>'} </span>
                </div>
            </div> */}
           <div className='w-full flex flex-wrap justify-center items-center'>
           <div className='flex flex-wrap justify-center gap-6 mt-14'>
                {loading ? (
                    <div className='flex flex-wrap justify-center w-full gap-6'>
                        {currentPosts.map((items) =>
                        (
                            <>
                                <Loading />
                            </>
                        ))}
                    </div>
                ) : (
                    currentPosts.map((item, index) => (
                        <div key={index} className="flip-container mb-6">
                            <div className="flipper">
                                <div className="front shadow-drop-center">
                                    <div className="text"></div>
                                    <div className='flex w-full justify-between p-4 items-center gap-2 mb-4 text-xs bg-neutral-100'>
                                        <span className='p-2 px-4 bg-blue-600 text-white '>Wireless Camera</span>
                                        <span className='font-bold flex flex-wrap'>{item.tags}</span>
                                    </div>
                                    <span className='flex justify-center px-4 font-grotesk font-bold'></span>
                                    <span className='flex text-center text-sm py-2 px-4'>
                                        {item.body.length > 40 ? `${item.body.substring(0, 300)}...` : item.body}
                                    </span>
                                </div>
                                <div className="back shadow-drop-center">
                                    <span className='flex flex-col text-center bg-neutral-100 py-2 text-sm px-4'>
                                        {item.body.length > 40 ? `...${item.body.substring(300, 900)}` : item.body}
                                        <p className="text">
                                            <span className='flex justify-center font-bold px-4 mt-64 py-2 text-sm bg-blue-300'>
                                                -*-* {item.userId} *-*-
                                            </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
           </div>
            {/* Render pagination controls */}
            <div className="pagination flex items-center gap-1 justify-center w-full h-full mt-10 mb-10">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={`rounded-md p-2 px-4 ${currentPage === 1 ? 'bg-neutral-200' : ''}`}>
                    Previous
                </button>
                <div className='bg-neutral-100 p-2 px-4 rounded-md'>{currentPage}</div>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPosts.length < postsPerPage} className={`rounded-md p-2 px-4 ${currentPosts.length < postsPerPage ? 'bg-neutral-200' : ''}`}>
                    Next
                </button>
            </div>
        </div>
    );
}
