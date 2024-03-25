import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
   const jobs = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id);
   const job = jobs.find(job => job.id === idInt);
   console.log(job);
   return (
      <div>
         <h2>Job Details of {id} </h2>
         <div>
            <button className="btn">Apply Now</button>
         </div>
      </div>
   );
};

export default JobDetails;