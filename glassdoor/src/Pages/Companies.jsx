import React from 'react'
import Footer from '../Component/Footer'
import Jobcard from '../Component/Jobcard'
import Jobdetails from '../Component/Jobdetails'
import AuthNavbar from '../Component/AuthNavbar'
import workingimage from '../assets/workingimage.jpg'
const Companies = () => {
  return (
    <div>
      <AuthNavbar/>
      <div className='flex p-3 gap-3 bg-slate-50'>
        <div className='w-1/2'>
        <img src={workingimage} alt=""  className='w-full'/>

        </div>
        <div className='w-1/2 flex flex-col gap-5 p-3 justify-center'>
        <p className='font-bold text-2xl'>Find a workplace that works for you</p>
        <p>Discover what an employer is really like before you make your next move. Search reviews and ratings, and filter companies based on the qualities that matter most to your job search.</p>
        <p className=' font-bold  '>Work/Life Balance</p>
        <p className=' font-bold  '>Diversity and inclusion</p>
        <p className=' font-bold  '>Compensation and Benefits</p>
        </div>
      </div>
      <br /><br /><br />
      <div className='flex p-2 gap-2 justify-center'>
          <p>Have an employer in mind?</p>
          <input type="text" placeholder='Search for a company' className='border border-black' />
          <button className='border bg-blue-500'>Search</button>
        </div>
        <br /><br />
      <Footer/>
    </div>
  )
}

export default Companies
