import React from 'react'

const Loader = () => {
    return (
        <>
            <div className='w-full h-full p-10'>
                <div class="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-blue-800 border-t-transparent shadow-md m-auto"></div>
            </div>
        </>
    )
}

export default Loader