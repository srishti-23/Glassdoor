import React from 'react'
import { CiBookmark } from "react-icons/ci";
const Jobdetails = ({title,companyName, remote, applicationLink, postdate, description, responsibilities, requirements, jobtype, city}) => {
  return (
    <div>
        <div className='flex flex-col w-3/4  border border-black rounded bg-slate-50'>
              <div className='flex justify-between'>
                   <div className='flex flex-col gap-3 p-3 bg-slate-50'>
                    <p>{companyName}</p>
                    <p className='font-bold text-3xl'>{title}</p>
                    <p>Remote:{remote}</p>
                    </div>
   
                    <div className='flex gap-5 p-3 '>
                        <CiBookmark/>
                        <a  className='bg-green-400 border-black rounded text-center m-auto' href={applicationLink}>Easily Apply</a>

                    </div>
              </div><br /><br />


              <div className='flex flex-col gap-2 p-3'>
                <p className='font-bold'>job Description:</p><p>{description}</p>
                <p className='font-bold'>Responsibilities:</p><p>{responsibilities}</p>
                <p>Requirements:{requirements}</p>
                <p>Job types:{jobtype}</p>
                
                
                <p>city:{city}</p>

              </div>
              <br /><br />


              
        </div>
    </div>
  )
}

export default Jobdetails
