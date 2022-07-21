import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const MyJobs = () => {
  const [joblist, setJoblist] = useState([]);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const fetchMyJobs = async () => {
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

  const fetchTutors = (assignmentid) => {
    console.log(assignmentid);
    navigate(`/parent/applied/${assignmentid}`);
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
      <div class=" bg-gray-400/75 antialiased text-gray-900 p-10 grid grid-cols-1">
        <div class="h-auto rounded-t text-center overflow-hidden grid grid-cols-2">
          <img
            src="https://i.imgur.com/fRhxDEo.png"
            alt=" assignment image"
            class="place-content-center shadow-md w-5/6"
          />
          <div class="relative px-4 -mt-16 grid grid-span-2 bg-white/50 rounded-r-3xl shadow-lg">
            <div id="font">
              <div id={job.parentid} key={job.parentid}>
                <p class="mt-40 text-2xl">Child's Name: {job.childName}</p>
                <p class="text-2xl">Child's Level: {job.level}</p>
                <p class="text-2xl">Subject: {job.subject}</p>
                <div>
                  <button
                    class="border-solid text-slate-700 text-2xl bg-teal-200 my-5 px-5 py-3 inline-block rounded-full  uppercase font-semibold tracking-wide"
                    onClick={() => {
                      fetchTutors(job.parentid);
                    }}
                  >
                    Show tutors
                  </button>
                  <div>
                    <button
                      class="border-solid text-white-600 text-xl bg-red-500 my-3 px-5 py-3 inline-block rounded-full  uppercase font-semibold tracking-wide"
                      onClick={() => {
                        deleteJob(job._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  });

  return (
    <>
      <h1 class="flex place-content-center mt-5 text-5xl " id="title">
        My Assignments
      </h1>
      {myJobs}
    </>
  );
};

export default MyJobs;
