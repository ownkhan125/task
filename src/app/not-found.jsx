'use client'

import { usePathname } from "next/navigation"


const PageNotFound = () => {


    const path = usePathname();

    return (
        <>
            <div className="h-[100vh] w-full flex items-center justify-center">
                <h2 >404 error | page not found {path} </h2>
            </div>
        </>
    )
}

export default PageNotFound;