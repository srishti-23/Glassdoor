import React from 'react'
import logo from '../assets/logo.png'
import { BsBoxArrowInRight } from "react-icons/bs";
import {navitems} from '../Utils/Constants'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex   justify-between items-center px-5  h-10 m-auto'>
       <div className=''>
       <Link to='/'>
        <div className=''>
            <img src={logo} alt="" />
        </div> </Link></div>
        <div className='flex justify-end items-center text-bold gap-10 '>
        <Link to='/community'>community</Link>
        <Link to='/companies'>Companies</Link>
        <Link to='/jobs'>Jobs</Link>
        <Link to='/salary'>Salary</Link>
        
        <Link to='/foremployers'>For Employers</Link>

        </div>
        <div className='flex border hover:bg-green-500 text-white font-medium  bg-black w-30 justify-between' >
            <button className='flex justify-between items-center gap-3 '> {<BsBoxArrowInRight/>}Sign in </button>
        </div>
      
    </div>
  )
}

export default Navbar
