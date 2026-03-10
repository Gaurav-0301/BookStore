import Login from "./Login";
import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";


const Navbar = () => {
  // 1. Correct the logic: Check if it EQUALS "true"
  // Using a function inside useState ensures this only runs once on load
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // 2. Add an effect to sync state if localStorage changes in other tabs/windows
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const navItem = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-20 mt-3">
      <div className="navbar bg-white text-black shadow-sm rounded-3xl">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost hover:bg-pink-500 border-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <Link to="/" className="font-bold text-2xl md:ml-4 cursor-pointer">
            BookStore
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>

        <div className="navbar-end space-x-4">
          {/* 3. Conditional rendering now works with the corrected boolean */}
          {isLoggedIn ? (
            <Logout setIsLoggedIn={setIsLoggedIn} />,
            
            
          ) : (
            <>
              <button
                className="btn bg-gray-800 text-white rounded-xl hover:bg-gray-700"
                onClick={() => {
                  const modal = document.getElementById("my_modal_5");
                  if (modal) modal.showModal();
                }}
              >
                Login
              </button>
              <Login setIsLoggedIn={setIsLoggedIn} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


