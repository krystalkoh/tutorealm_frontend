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
      console.log(data[0]);
      setJobsAppliedId(data[0]);
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
            appliedId: jobsAppliedId.jobsApplied,
          }),
        }
      );
      const data = await response.json();
      setJobsApplied(data);
    } catch (error) {
      console.log(error);
      console.log("error.message");
    }
  };

  useEffect(() => {
    getAppliedJobs();
  }, [toggle]);

  if (jobsApplied) {
    console.log(jobsApplied);
    const results = jobsApplied.map((item) => {
      return (
        <div class=" bg-gray-400/75 antialiased text-gray-900 p-10 grid grid-cols-1">
          <div class="h-auto rounded-t text-center overflow-hidden grid grid-cols-2">
            <img
              src="https://i.imgur.com/zjkHE5b.png"
              alt=" assignment image"
              class="place-content-center shadow-md"
            />
            <div class="relative px-4 -mt-16 grid grid-span-2 bg-white/50 rounded-r-3xl shadow-lg">
              <div class="mt-40 text-2xl" id="font">
                {/* <h6> tutorsApplied: {item.assignments[0].tutorsApplied} </h6> */}
                <h6 class="py-2">
                  Name of Child: {item.assignments[0].childName}
                </h6>
                <h6 class="py-2">Days: {item.assignments[0].days}</h6>
                <h6 class="py-2">Duration: {item.assignments[0].duration}</h6>
                <h6 class="py-2">
                  {" "}
                  Frequency: {item.assignments[0].frequency}
                </h6>
                <h6 class="py-2"> Subject: {item.assignments[0].subject}</h6>
                <h6 class="py-2"> Rate: {item.assignments[0].rate}</h6>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <>
        {/* <h1>this is applied jobs page</h1> */}
        {/* {JSON.stringify(jobsApplied)} */}
        {results}
      </>
    );
  }
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
