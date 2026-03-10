import React from 'react'
import axios from "axios"
import toast from 'react-hot-toast'

const Logout = ({ setIsLoggedIn }) => {

const handleClick = async () => {
  try {
    await axios.post("book-store-26of903cz-gaurav-0301s-projects.vercel.app/auth/logout");
    
    // Clear the data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("User");

    // BROADCAST: Tell the whole app something changed
    window.dispatchEvent(new Event("auth-state-changed"));
    
    toast.success('Logout successfully.');
    setIsLoggedIn(false); 
  } catch (error) {
    console.log("logout error"+error)
  }
}
  return (
    <div>
      <button 
        className="bg-red-500 px-4 py-2 text-white rounded-xl hover:bg-red-400 duration-200"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  )
}

export default Logout