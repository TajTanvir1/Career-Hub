import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

   const [jobs, setJobs] = useState([]);

   const [dataLength, setDataLength] = useState(4);

   useEffect(() => {
      fetch('jobs.json')
         .then(res => res.json())
         .then(data => setJobs(data));
   }, [])

   return (
      <div>
         <h2 className="text-3xl text-center">Featured Jobs: {jobs.length} </h2>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error inventore blanditiis aliquid maiores sapiente soluta!</p>

         <div className="grid grid-cols-2 gap-6">
            {
               jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
         </div>
         <div className={dataLength === jobs.length && 'hidden'}>
            <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary mx-auto">Show All Jobs</button>
         </div>
      </div>
   );
};

export default FeaturedJobs;