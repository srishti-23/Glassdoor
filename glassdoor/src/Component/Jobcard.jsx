import React from 'react'
import { CiBookmark } from "react-icons/ci";

const Jobcard = ( {title,companyName,remote,applicationLink,postdate}) => {
  return (
    <div className='flex p-5 gap-3'>
      <div className='flex flex-col  w-1/3'>
            <div className='flex gap-10 bg-slate-100 border rounded'>
                <div className='flex flex-col p-3 m-auto gap-3 '>
                  <p>{companyName}</p>
                  <p className='font-bold text-2xl'>{title}</p>
                  <p>Remote:{remote}</p>
                  <p>5T - 10T [Employer Est]</p>
                  
                  <a  className='bg-green-400 border-black rounded text-center' href={applicationLink}>Easily Apply</a>
                </div>

                <div className='flex  flex-col p-3   justify-between '>
                    <CiBookmark className=''/>
                    <p className=''>{postdate}</p>
                </div>
                <br /><br />
            </div>
        </div>


       
    </div>
  )
}

export default Jobcard
