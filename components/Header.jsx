import Link from 'next/link'
import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

const Header = () => {
    return (
        <>
           <nav className='flex text-center justify-center rounded-xl w-6/12 mx-auto mt-4 bg-cyan-100'>

                <Link className='my-auto text-4xl mr-6 border-r-2 border-black pr-3 py-0' href={"/"}><FaLaptopCode /></Link>
                <h1 className='text-4xl my-3 py-0'>Job Search</h1>

           </nav>
        </>
    )
}

export default Header