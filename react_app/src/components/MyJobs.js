import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const MyJobs = () => {
  const [joblist, setJoblist] = useState([]);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const fetchMyJobs = async (input) => {
    const res = await fetch("http://localhost:5001/api/parent/created", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + authService.getCurrentUser().access,
      },
    });
    const jobs = await res.json();
    console.log(jobs);
    setJoblist(jobs.assignments);
  };

  useEffect(() => {
    fetchMyJobs();
  }, [counter]);

  const fetchTutors = (parentid) => {
    console.log(parentid);
    navigate(`/parent/applied/${parentid}`);
  };

  const deleteJob = async (id) => {
    const res = await fetch(
      `http://localhost:5001/api/parent/removeJob/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + authService.getCurrentUser().access,
        },
      }
    );
    const jobs = await res.json();
    console.log(jobs);
    setJoblist(jobs.assignments);
    setCounter(counter + 1);
  };

  const myJobs = joblist?.map((job) => {
    console.log(job);
    return (
      <div>
        <div id={job.parentid} key={job.parentid}>
          <p>{job.childName}</p>
          <p>{job.level}</p>
          <p>{job.subject}</p>
        </div>
        <div>
          <button
            onClick={() => {
              fetchTutors(job.parentid);
            }}
          >
            Show tutors
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              deleteJob(job._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>My Assignments</h1>
      {myJobs}
    </>
  );
};

export default MyJobs;
