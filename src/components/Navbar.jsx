import React from "react";
import { FaBars, FaSearch, FaBell } from "react-icons/fa";
import reza from "../assets/reza.jpeg"
import rpl2 from "../assets/rpl2.png"

function Navbar() {
  return (
    <nav className='bg-blue-800 mx-full px-6 py-5 flex justify-between items-center mb-30'>
      <div className='flex items-center text-2xl'>
        <img src={rpl2} alt="logo" className="w-[60px] mx-auto mr-4"/>
        <span className='text-white font-bold'>Absensi Online</span>
      </div>
      <div className='flex items-center gap-6'>
        <FaBars className='text-white cursor-pointer w-8 h-8' />
        <div className='relative md:w-80'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <button className='p-2 focus:outline-none text-white md:text-black'>
              <FaSearch className='w-6 h-6' />
            </button>
          </span>
          <input
            type='text'
            className='w-full px-6 py-3 pl-14 rounded shadow outline-none hidden md:block'
            placeholder='Search...'
          />
        </div>
      </div>
      <div className='flex items-center gap-x-6'>
        <FaBell className='text-white w-8 h-8 cursor-pointer' />
        <div className='relative'>
          <button className='text-white group'>
            <img src={reza} alt="logo" className="w-[40px] h-[40px] mx-auto rounded-full object-cover"/>
            <div className='absolute hidden group-hover:block z-10 rounded-lg shadow w-40 top-full right-0 bg-white'>
              <ul className='py-3 text-base text-gray-950'>
                <li>
                  <a href='Profile' className='block px-4 py-3 hover:bg-blue-400'>Profile</a>
                </li>
                <li>
                  <a href='Setting' className='block px-4 py-3 hover:bg-blue-400'>Setting</a>
                </li>
                <li>
                  <a href='LogOut' className='block px-4 py-3 hover:bg-blue-400'>Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
