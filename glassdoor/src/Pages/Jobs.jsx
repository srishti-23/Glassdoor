import React, { useEffect, useState } from 'react'
import AuthNavbar from '../Component/AuthNavbar'
import { baseapi } from '../api/axiosfile'
import axios from 'axios'
import Jobcard from '../Component/Jobcard'
import Jobdetails from '../Component/Jobdetails'
import { useDispatch } from 'react-redux'
import { selectjob } from '../store/jobslice/Jobslice'



const Jobs = () => {
  const [jobs, setjobs] =useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const dispatch=useDispatch();

  

useEffect(()=>{
  const job= async()=>{
    try {
      const jobdata = await baseapi('/search')
       setjobs(jobdata.data)
       if(jobdata.data.length>0){
        setSelectedJob(jobdata.data[0])  //set the first job as default selected job
        dispatch(selectedJob(jobdata.data[0].job_id))
       }
      
    } catch (error) {
      console.error('error fetching jobs',error)
      
    }
       
       console.log(jobs)
       
      
       
  }
  job();
},[])
const savejobid=(job)=>{
  setSelectedJob(job)
  
  dispatch(selectjob(job.job_id))

}

  return (
    <div>
        <AuthNavbar/>
        <div className='flex'>
        <div className='w-[50%] m-auto '>
            {
                jobs && jobs.map((job) => (
                    <div key={job.job_id} onClick={()=>savejobid(job) } className="cursor-pointer">
                        <Jobcard  title={job.job_title} companyName={job.employer_name} remote={job.job_is_remote} applicationLink={job.job_apply_link} postdate={job.job_posted_at_datetime_utc} />
                        {/* <Jobdetails title={job.job_title} companyName={job.employer_name} remote={job.job_is_remote} applicationLink={job.job_apply_link} postdate={job.job_posted_at_datetime_utc} description={job.job_description} responsibilities={job.job_highlights.Responsibilities} requirements={job.job_highlights.Qualification} jobtype={job.job_employment_type} city={job.job_city}/> */}
                    </div>
                ))
            }
            
            
        </div>

        <div className='w-1/2'>
          {selectedJob && (
            <Jobdetails
              title={selectedJob.job_title}
              companyName={selectedJob.employer_name}
              remote={selectedJob.job_is_remote}
              applicationLink={selectedJob.job_apply_link}
              postdate={selectedJob.job_posted_at_datetime_utc}
              description={selectedJob.job_description}
              responsibilities={selectedJob.job_highlights?.Responsibilities}
              requirements={selectedJob.job_highlights?.Qualification}
              jobtype={selectedJob.job_employment_type}
              city={selectedJob.job_city}
            />
          )}
        </div>
        
        </div> 
        
      
    </div>
  )
}

export default Jobs
