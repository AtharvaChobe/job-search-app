import React from 'react'
import Link from 'next/link'
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font bg-cyan-100 absolute bottom-0 w-full">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link className='my-auto text-4xl mr-6 border-r-2 border-black pr-3 py-0' href={"/"}><FaLaptopCode /></Link>
                <h1 className='text-4xl my-3 py-0'>Job Search</h1>

                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Atharva Chobe —
                        <a href="https://twitter.com/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@atharvachobe</a>
                    </p>
                    <span className="inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        
                        <a href="https://github.com/AtharvaChobe"><FaGithub className='text-xl' /></a>
                        <a href="mailto:atharvachobe72@gmail.com"><IoIosMail className='text-2xl'/></a>
                        <a href="www.linkedin.com/in/atharva-chobe-81b75024b"><FaLinkedin className='text-2xl'/></a>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer