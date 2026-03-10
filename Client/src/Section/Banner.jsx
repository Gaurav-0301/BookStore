import React, { useState } from 'react' // 1. Import useState
import Book from '../assets/BooksBanner.jpg'
import toast from 'react-hot-toast'

const Banner = () => {
  // 2. Create state to hold the input value
  const [enquiry, setEnquiry] = useState("");

  const handleClick = () => {
    // 3. Check if the input is empty or just whitespace
    if (enquiry.trim() === "") {
      toast.error("Please enter your enquiry first!");
    } else {
      toast.success("We will reach you soon!!");
      setEnquiry(""); // Optional: Clear the input after success
    }
  }

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-3'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-1 md:order-2'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
              Hello, Welcome here to learn something  
              <span className='text-pink-500'> new everyday!!!</span>
            </h1>
            <p className='text-xl'>
              “Welcome to your Bookstore Dashboard — manage inventory, track sales, monitor orders, analyze customer trends, and discover top-selling books.”
            </p>
            
            {/* 4. Bind value and onChange to the input */}
            <input 
              type="text" 
              placeholder="Enquiry" 
              className="input bg-white border-black w-[95%] content-center" 
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
            />
          </div>
          <button 
            className="btn btn-secondary mt-6" 
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
        <div className='w-full md:w-1/2 mt-10 md:mt-1'>
          <img src={Book} alt="Books Banner" className=''/>
        </div>
      </div>
    </>
  )
}

export default Banner
