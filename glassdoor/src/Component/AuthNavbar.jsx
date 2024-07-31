import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const AuthNavbar = () => {
  return (
    <div className='flex p-5 h-20 m-auto items-center justify-between'>
      <div className=''>
       <Link to='/'>
        <div className=''>
            <img src={logo} alt="" />
        </div> </Link></div>
        <div className='flex   justify-between items-center px-5  h-10 gap-10 m-auto'>
        <Link to='/community'>community</Link>
        <Link to='/companies'>Companies</Link>
        <Link to='/jobs'>Jobs</Link>
        <Link to='/salary'>Salary</Link>
        </div>

        <div className='flex items-center justify-between gap-3 '>
            <div className='flex items-center bg-slate-300 rounded-lg  hover:bg-gray-300'>
                <CiSearch/>
               <input type="text" placeholder='Search' size={3} />
              
            </div>
           <div> <IoNotificationsOutline/></div>
           <div> <CgProfile/></div>
        </div>
       
      <hr />
    </div>
  )
}

export default AuthNavbar
