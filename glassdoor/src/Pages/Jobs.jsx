import React, { useEffect, useState } from 'react'
import AuthNavbar from '../Component/AuthNavbar'
import { baseapi } from '../api/axiosfile'
import axios from 'axios'
import Jobcard from '../Component/Jobcard'


const Jobs = () => {
  const [jobs, setjobs] =useState([]);
  

  //  const allJobs=async()=>{
  //   try {
  //     const res=await baseApi.get("/search",{
  //       params:{
  //         query:'Node.js developer in New-York,USA',
      
  //       }
  //     })
  //     setjobs(res.data)
      
  //   } catch (error) {
  //     console.error('error in fetcing data',error)
  //   }
  // }
  // useEffect(()=>{allJobs()},[]);

  // console.log('MYJOBS',jobs)
  // const options = {
  //   method: 'GET',
  //   url: 'https://jsearch.p.rapidapi.com/search',
  //   params: {
  //     query: 'Node.js developer in New-York,USA',
  //     page: '1',
  //     num_pages: '1',
  //     date_posted: 'all'
  //   },
  //   headers: {
  //     'x-rapidapi-key': 'c9aabb0847mshfb8c3e00e99677fp1ac30bjsn0b415fdfcc47',
  //     'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  //   }
  // };
  
  // useEffect(()=>{
  //   const getjobs= async ()=>{
      
      
      
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getjobs();
  // },[])

useEffect(()=>{
  const job= async()=>{
       const jobdata = await baseapi('/search')
       setjobs(jobdata.data)
       //console.log(jobs)
       
      
       
  }
  job();
},[])

  return (
    <div>
        <AuthNavbar/>
        <div className='w-[80%] m-auto'>
            {
                jobs && jobs.map((job) => (
                    <div key={job.id}>
                        <Jobcard title={job.job_title} companyName={job.employer_name} remote={job.job_is_remote} applicationLink={job.job_apply_link} postdate={job.job_posted_at_datetime_utc} />
                    </div>
                ))
            }
        </div>
        
        
        
      
    </div>
  )
}

export default Jobs
