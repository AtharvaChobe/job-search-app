'use client'
import React, { useState } from 'react'
import ShowData from './ShowData';

const Filters = () => {

    const [query, setquery] = useState("");
    const [location, setlocation] = useState("");
    const [type, settype] = useState("");
    const [remote, setremote] = useState(false);


  return (
    <>
        <div className='flex flex-wrap text-center align-middle justify-evenly mt-7 w-10/12 mx-auto bg-gray-100 p-8 rounded-md'>

            <div className='flex gap-3 mb-3'>

            <input className='w-1/2 border rounded p-3 text-lg' type="text" placeholder='Job title...' value={query} onChange={(e)=>setquery(e.target.value)}/>

            <input className='w-1/2 border rounded p-3 text-lg' type="text" placeholder='Country' value={location} onChange={(e)=>setlocation(e.target.value)}/>
            </div>


            {/* select 1 */}
            <label htmlFor="" className='my-auto text-lg font-bold'>Remote Job : </label>
                <select className='border rounded py-3 px-4 text-lg' name="" id="" value={remote} onChange={(e)=>{setremote(e.target.value)}}>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
            {/* select 2 */}
            <label htmlFor="" className='my-auto text-lg font-bold'>Job type : </label>
                <select className='border rounded py-3 px-4 text-lg' name="" id="" value={type} onChange={(e)=>{settype(e.target.value)}}>
                    <option value="">All</option>
                    <option value="fulltime">Full-time</option>
                    <option value="parttime">Part-time</option>
                    <option value="intern">Intern</option>
                    <option value="contractor">Contractor</option>
                </select>
        </div>

        <ShowData query={query} location={location} type={type} remote={remote}/>
    </>
  )
}

export default Filters