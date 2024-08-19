'use client';

import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    const handle = async () => {
        const emailElement = document.querySelector('#input');
        const input = emailElement.value;
    
        if (input.includes('@gmail.com')) {
            router.push('/task3/admin');
        } else {
            router.push('/task3');
        }
    }

    return (
        <>
            <div className='p-2'>
                <h4 className='mb-3'>Enter Email</h4>
                <input id="input" type="text"
                    className="peer relative h-10 w-full rounded-md bg-slate-200 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg" />
                <div className='mx-auto w-fit my-5' onClick = {() => handle()}><button className=' p-3 bg-slate-400 rounded-md' >use router</button></div>
            </div>


        </>
    )
}

export default page