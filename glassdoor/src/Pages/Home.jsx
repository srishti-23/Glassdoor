import React from 'react'
import Navbar from '../Component/Navbar'
import homeimg from '../assets/homeimg.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple ,FaCircle,FaEnvelope } from "react-icons/fa";
import { GiCircle } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import { PiNotepadLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import logo from '../assets/logo.png'
import { DiAndroid, DiApple } from "react-icons/di";
import { SiGlassdoor } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube ,FaInstagram, FaTiktok} from "react-icons/fa";
import Footer from '../Component/Footer';

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <br /><br />
      <h1 className='flex justify-center text-5xl font-bold text-green-400' >Your work people are here</h1>
    </div>
    <div className=' justify-between'>
        
            <img src={homeimg } alt="" />
        
        <div className=' flex flex-col justify-between items-center gap-5'>
            <p>Create an account or sign in. By continuing, you agree to our Terms of Use and Privacy Policy.</p>
            <button className='flex items-center border border-black '>{<FcGoogle/>}   continue with Google</button>
            <button className='flex items-center border border-black '>{<FaFacebook/>}   continue with facebook</button>
            <button className='flex items-center border border-black '>{<FaApple/>}   continue with Apple</button>
            </div>
            <div className=' flex flex-col'>
            <form action="">
            <label htmlFor="email">enter email</label>
            <input className='outline' type="email" />
            <button className=' w-100 h-30 border border-black rounded'>continue with email</button>
            </form>
            <div className='flex flex-col items-center'>
                <div className=' flex flex-col items-center '>
                  <h1 className=' text-3xl font-bold text-black'>Get ahead with Glassdoor</h1>
                  <p>We're serving up trusted insights and anonymous conversation, so you'll have the goods you need to succeed.</p>
                </div>
                <div className='flex justify-between gap-14'>
                    <div className="relative flex flex-col items-center" >
        <GiCircle size={100} className="" />
        <GoCommentDiscussion size={50} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <p>Join your work community</p>
      </div>
      <div className="relative flex flex-col items-center" >
        <GiCircle size={100} className="" />
        <PiNotepadLight size={50} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <p>Find and apply to jobs</p>
      </div>
      <div className="relative flex flex-col items-center" >
        <GiCircle size={100} className="" />
        <HiOutlineBuildingOffice2 size={50} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <p>Search company reviews</p>
      </div>
      <div className="relative flex flex-col items-center" >
        <GiCircle size={100} className="" />
        <FiMonitor size={50} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <p>Compare Salaaries</p>
      </div>
      </div>
         
                
            </div>

            </div>

       <div className='flex flex-col items-center bg-slate-200'>
        <h2 className='text-2xl font-bold'>Start your search</h2>
        <p className='text-md'>Need some inspiration? See what millions of people are looking for on Glassdoor today.</p>
        </div>
        
        <hr /><hr />
        <Footer/>
    </div>
    </>
  )
}

export default Home
