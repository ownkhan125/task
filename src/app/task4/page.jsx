import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <h1>Use Middleware</h1>

            <div className='mx-auto w-fit my-5 flex gap-x-5'>
                <button className=' p-3 bg-slate-400 rounded-md' ><Link href={'/task4/first'}>/task/first</Link></button>
                <button className=' p-3 bg-slate-400 rounded-md' ><Link href={'/task4/second'}>/task/second</Link></button>
            </div>
        </>
    )
}

export default page