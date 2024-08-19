'use client'

import {  useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import product from '@/services/product';
import style from '@/style/blog.module.css';


const page = () => {

    const [data, setData] = useState([]);
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            const getdata = await product();  // Await the result from the product function
            setData(getdata);  // Set the fetched data into the state
        };

        fetchData();
    }, []);

    // useEffect(() => {

    //     (async () => {
    //         try {

    //             await fetch('https://fakestoreapi.com/products')
    //                 .then(res => res.json())
    //                 .then(val =>
    //                     setData(val),

    //                 )

    //         } catch (error) {
    //             console.log(error?.message);
    //         }
    //     })();
    // }, [])


    const handle = (id) => {
        router.push(`/task1/${id}`);
    }




    return (

        <>
            {/* start post-section */}
            <div className={`${style['post-section']} container-1`}>
                <div className='row justify-between px-1'>
                    <div className='w-[55%] bg-[#fef4ea;]'>
                        <div className='max-w-full overflow-hidden'>
                            <img src="/images/report.png" alt="" />
                        </div>
                        <div className='p-8'>
                            <h4 className='underline underline-offset-1 mb-4'>The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers</h4>
                            <p className='mb-6'>Discover the digital marketing industry trends, winning opportunities and challenges brands face thi...</p>
                            <p className='fs-14'>Maxwell Iskiev</p>
                        </div>
                    </div>
                    <div className='w-[43%] h-[100%]'>
                        <div className='border-b-2 border-[#ff5c35;] mb-2'>
                            <p className='fs-16 mb-1'>Featured Post</p>
                        </div>
                        <div className=' max-h-[600px] overflow-auto pe-4'>
                            <div>
                                    {
                                        data.map((item, index) => (
                                            <div key={index} className='cursor-pointer border-b-2 border-[#dbe4ed;] py-4 flex flex-col gap-y-2 justify-between' onClick={() => handle(item.id)}>
                                                <p className='text-sm font-semibold underline underline-offset-1'>{item.title}</p>
                                                <div className='flex justify-between'>
                                                    <span className='text-sm font-light'>{item.price}</span>
                                                    <span className='text-sm font-light'>{item.rating.count}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End post-section */}

        </>
    )
}

export default page;

