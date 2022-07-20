import React, { useState, useEffect } from "react";
import authService from "../services/AuthService";
// import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";

const AvailableJobs = () => {
  const [availableJobs, setAvailableJobs] = useState([]);
  // const navigate = useNavigate();
  const fetchAvailableJobs = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/tutor/assignments",
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
      setAvailableJobs(data.assignments);
    } catch (error) {
      console.log("error.message");
    }
  };
  useEffect(() => {
    fetchAvailableJobs();
  }, []);
  console.log(availableJobs);
  // if (data) {
  // const results = availableJobs.map((item) => {
  //   return (
  //     <div>
  //       <div key={item.id}>
  //         <h3> Child Name: {item.childName}</h3>
  //       </div>
  //     </div>
  //   );
  // });
  // console.log(results);
  // }
  // console.log(availableJobs);

  return (
    <>
      <JobCard data={availableJobs}></JobCard>
      {/* {results} */}
    </>
  );
};
export default AvailableJobs;
