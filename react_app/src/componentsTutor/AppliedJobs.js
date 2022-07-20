import React, { useState, useEffect } from "react";
import authService from "../services/AuthService";

const AppliedJobs = (props) => {
  const [jobsAppliedId, setJobsAppliedId] = useState("");
  const [jobsApplied, setJobsApplied] = useState("");
  const [toggle, setToggle] = useState(true);

  const fetchJobId = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/tutor/applied/jobs",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + authService.getCurrentUser().access,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(data[0].jobsApplied);
      setJobsAppliedId(data[0].jobsApplied);
      setToggle(!toggle);
    } catch (error) {
      console.log("error.message");
    }
  };

  useEffect(() => {
    fetchJobId();
  }, []);

  const getAppliedJobs = async () => {
    console.log(toggle);
    try {
      const response = await fetch(
        "http://localhost:5001/api/tutor/applied/allJobs",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + authService.getCurrentUser().access,
          },
          body: JSON.stringify({
            appliedId: jobsAppliedId,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setJobsApplied(data);
    } catch (error) {
      console.log(error);
      console.log("error.message");
    }
  };

  // useEffect(() => {
  //   getAppliedJobs();
  // }, [toggle]);

  // if (jobsApplied) {
  //   console.log(jobsApplied);
  //   const results = jobsApplied?.map((item) => {
  //     console.log(item);
  //     return (
  //       <div>
  //         <h6> tutorsApplied: {item.assignments[12].tutorsApplied} </h6>
  //         <h6> ChildName: {item.assignments[12].childName}</h6>
  //         <h6> Days: {item.assignments[12].days}</h6>
  //         <h6> duration: {item.assignments[12].duration}</h6>
  //         <h6> frequency: {item.assignments[12].frequency}</h6>
  //         <h6> subject: {item.assignments[12].subject}</h6>
  //         <h6> rate: {item.assignments[12].rate}</h6>
  //       </div>
  //     );
  //   });
  // }

  return (
    <>
      <h1>this is applied jobs page</h1>
      {/* {JSON.stringify(jobsApplied)} */}
      {/* {results} */}
    </>
  );
};

export default AppliedJobs;

//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [jobID, setjobID] = useState("");

//   setjobID(props.id);

//   const fetchPost = async () => {
//     try {
//       const token = authService.getAccessToken();
//       const decoded = jwt_decode(token); //checkthis

//       console.log(decoded);

//       // put tutor email into body of fetch request
//       const response = await fetch(
//         "http://127.0.0.1:5001/api/tutor/applied",
//         newOptions
//       );
//       const newOptions = {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + authService.getAccessToken().access,
//         },
//         body: JSON.stringify({
//           tutorId: decoded.id,
//           assignmentId: jobID,
//         }),
//       };
//       const jobs = await response.json();
//       setAppliedJobs(jobs);
//     } catch (error) {
//       console.log("error.message");
//     }

//     useEffect(() => {
//       fetchPost();
//     }, []);
//   };
