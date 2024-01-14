import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { IoLocationSharp } from "react-icons/io5";
import Footer from './Footer';


const ShowData = ({ query, location, type, remote }) => {
    const [loading, setloading] = useState()
    const [isOpen, setisOpen] = useState(false)
    const [container, setcontainer] = useState([]);
    const [page, setpage] = useState(0);


    const getData = async () => {
        const options = {
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/list',
            params: {
                query: `${query}`,
                location: `${location}`,
                distance: '50',
                language: 'en_GB',
                remoteOnly: `${remote}`,
                datePosted: 'month',
                emplyomentTypes: `${type}`,
                index: `${page}`
            },
            headers: {
                'X-RapidAPI-Key': '77fda6d5b5msha6dec97b1da1a89p11fa38jsnac6b2ee6fccf',
                'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
            }
        };

        try {
            setloading(true);
            const response = await axios.request(options);
            // console.log(response.data.jobs);
            setcontainer(response.data.jobs);
            setloading(false);
        } catch (error) {
            console.error(error);
        }
    }





    return (
        <>
            <div className='h-[100vh]'>

                {
                    loading
                        ?
                        <button onClick={getData} className='bg-red-100 text-lg px-3 py-1 rounded mt-4 ml-[45%] text-white font-bold'>Searching...</button>
                        :
                        <button onClick={getData} className='bg-red-500 text-lg px-3 py-1 rounded mt-4 ml-[45%] text-white font-bold'>Search</button>

                }


                {
                    container.map((j, index) => {
                        return (
                            <div key={j.id} className='flex flex-col flex-wrap w-9/12 mx-auto my-8 bg-cyan-50 p-8 rounded shadow-lg'>
                                {/* details */}
                                <div className=' flex flex-col my-auto border-slate-400 border-b-2 pb-3'>
                                    <h2 className='font-bold text-xl my-2'>{index + 1}. Title : {j.title}</h2>
                                    <h2 className='text-lg'>Company : {j.company}</h2>
                                    <h3 className='text-lg'>{j.employmentType}</h3>
                                    <span className='text-lg'> <IoLocationSharp /> {j.location}</span>
                                </div>

                                {/* description */}
                                <div className='w-full'>
                                    <h1 className='text-lg font-bold'>Description</h1>
                                    <p className='overflow-auto bg-white rounded h-40 text-lg p-8'>{j.description}</p>
                                    <div className='mt-4 flex flex-wrap gap-2'>

                                        {
                                            j.jobProviders.map((i, index) => {
                                                return (
                                                    <>
                                                        {
                                                            index > 2
                                                                ?
                                                                ""
                                                                :
                                                                // "Apply"
                                                                <a key={index} href={i.url} className='px-3 py-2 rounded bg-black text-white mt-12'>
                                                                    Apply link {index + 1}
                                                                </a>
                                                        }

                                                    </>

                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {


                    page == 0
                        ?
                        <button className='my-4 bg-green-400 text-black font-bold px-4 py-2 ml-[43%] rounded-md' onClick={() => { setpage(page + 1), getData(), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>Next</button>
                        :
                        <div className='flex my-4 ml-[40%] gap-4'>
                            <button className='bg-green-400 text-black font-bold px-4 py-2 rounded-md' onClick={() => { setpage(page + 1), getData(), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>Next</button>
                            <button className='bg-red-400 text-black font-bold px-4 py-2 rounded-md' onClick={() => { setpage(page - 1), getData(), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>Back</button>
                        </div>


                }


            </div>

        </>
    )
}

export default ShowData