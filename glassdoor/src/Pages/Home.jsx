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
        <div className='flex items-start justify-between p-5'>
            <div> <img src={logo} alt=""  /> </div>
            <div className='flex flex-col items-start'><p className='font-bold'>Glassdoor</p>
            <p>About/Press</p>
            <p>Blog</p>
            <p>Grienvence</p>
            <p>Officer-India</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='font-bold'>Employers</p>
                <p>Get a free employer </p>
                <p>Account</p>
                Employer centre
            </div>
            <div className='flex flex-col items-start'>
                <p className='font-bold'>Information</p>
                <p>Help/Contact us</p>
                <p>Guidelines</p>
                <p>Terms of Use</p>
                <p>Privacy and Ad</p>
                <p>Choices</p>
                <p>Do Not Sell Or Share</p>
                <p>My Information</p>
                <p>Cookie Consent Tool</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='font-bold'>Work With Us</p>
                <p>Advertisers</p>
                <p>careers</p>
            </div>
        </div>
        
        <div className='flex justify-center p-5 gap-10'>
            <div className='flex justify-between items-center gap-1'>
                <p>Download the App</p>
                <DiAndroid size={25} />
                <DiApple size={25}/>

            </div>
            <div className='flex items-center justify-between gap-2'>
                <a href="https://www.glassdoor.co.in/glassdoor">
            <div className=" relative flex flex-col items-center hover:bg-green-500 hover:text-white rounded-full" >
        <GiCircle size={60} className="" />
        <SiGlassdoor size={30} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div></a>

      <a href="https://www.facebook.com/Glassdoor/">
      <div className=" relative flex flex-col items-center hover:bg-blue-500 hover:text-white rounded-full" >
        <GiCircle size={60} className="" />
        <FaFacebookF size={30} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div></a>

      <a href="https://twitter.com/Glassdoor">
      <div className=" relative flex flex-col items-center hover:bg-blue-500 hover:text-white rounded-full" >
        <GiCircle size={60} className="" />
        <FaXTwitter size={30} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div></a>

    <a href="https://www.youtube.com/Glassdoor">
      <div className=" relative flex flex-col items-center hover:bg-red-500 hover:text-white rounded-full" >
        <GiCircle size={60} className="" />
        <FaYoutube size={30} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /> 
      </div></a>

       <a href="https://www.instagram.com/glassdoor">
      <div className=" relative flex flex-col items-center hover:bg-pink-500 hover:text-white rounded-full" >
        <GiCircle size={60} className="" />
        <FaInstagram size={30} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div></a>

        <a href="https://tiktok.com/@glassdoor">
      <div className=" relative flex flex-col items-center hover:bg-black hover:text-white rounded-full" >
        <GiCircle size={60} className="" />
        <FaTiktok size={30} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div></a>
        </div>
        
      <div className=' flex items-center '>
        <select name="country" id=" country " className='border border-blue-500 rounded'>
            <option value="Argentina">Argentina</option>
            <option value="America">America</option>
            <option value="Brazil">Brazil</option><option value="Argentina">Argentina</option>
            <option value="Britan">Britan</option>
            <option value="China">China</option>
            <option value="Canada">Canada</option>
            <option value="Deutch">Deutch</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Holland">Holland</option>
            <option value="India" selected>India</option>
            <option value="Korea">Korea</option>
            <option value="Japan">Japan</option>
            <option value="Malasia">Malasia</option>
            <option value="Norway">Norway</option>
            <option value="Parice">Parice</option>
        </select>
      </div>
        </div>
        <hr /><hr />
        <Footer/>
    </div>
    </>
  )
}

export default Home
