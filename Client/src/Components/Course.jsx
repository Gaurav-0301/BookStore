import React from 'react'

import Cards from '../Components/Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';


const Course = () => {
  const [list,setList]=useState([]);
  useEffect(()=>{
const getBook= async()=>{
try {
  const res=await axios.get("https://book-store-backend-one-wine.vercel.app/books");
  console.log(res);
  setList(res.data);
} catch (error) {
  console.log("Axios getBook Error"+ error.message)
}
}
getBook();
  },[])
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-2">
      
      <div className='mt-28 text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have <span className='text-pink-500'>Here! :)</span>
        </h1>

        <p className='mt-12'>
          Explore our curated courses designed to expand your knowledge, sharpen your skills, and unlock new opportunities. Learn from powerful content, grow confidently, and take the next step toward success today.
        </p>

        <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-10 hover:bg-pink-700 duration-300'>
          <Link to="/">Back</Link>
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-12'>
        {list.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>

    </div>
  )
}

export default Course