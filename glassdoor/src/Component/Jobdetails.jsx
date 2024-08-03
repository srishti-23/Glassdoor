import React from 'react'
import { CiBookmark } from "react-icons/ci";
const Jobdetails = () => {
  return (
    <div>
        <div className='flex flex-col w-2/3  border border-black rounded'>
              <div className='flex justify-between'>
                   <div className='flex flex-col gap-3 p-3 bg-slate-50'>
                    <p>company_name</p>
                    <p className='font-bold text-3xl'>job_title</p>
                    <p>Remote</p>
                    </div>

                    <div className='flex gap-5 p-3 '>
                        <CiBookmark/>
                        <a  className='bg-green-400 border-black rounded text-center' href="">Easily Apply</a>

                    </div>
              </div><br /><br /><br />


              <div className='flex flex-col gap-2 p-3'>
                <p>job Description:</p>
                <p>Responsibilities:</p>
                <p>Requirements:</p>
                <p>Job types:</p>
                <p>Contract length:</p>
                <p>pay:</p>
                <p>other:</p>

              </div>
              <br /><br />


              
        </div>
    </div>
  )
}

export default Jobdetails
