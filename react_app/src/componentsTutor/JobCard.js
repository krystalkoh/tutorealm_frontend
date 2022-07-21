import React, { useState } from "react";
// import AppliedJobs from "./AppliedJobs";
import ConfirmationModal from "./ConfirmationModal";
import JobDetailsModal from "./JobDetailsModal";
import authService from "../services/AuthService";
import jwtDecode from "jwt-decode";

const JobCard = (props) => {
  //state for modal
  const [preview, setPreview] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  //Applied
  const [appliedJobs, setAppliedJobs] = useState([]);
  // const [parentid, setParentid] = useState([]);
  //APPLIED JOB FUNCTION

  const AppliedJobs = async (parentid) => {
    console.log(parentid);
    console.log(authService.getCurrentUser().access);
    try {
      const token = authService.getCurrentUser().access;
      const decoded = jwtDecode(token); //checkthis
      console.log(decoded.email);
      // put tutor email into body of fetch request
      const response = await fetch("http://127.0.0.1:5001/api/tutor/applied", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + authService.getCurrentUser().access,
        },
        method: "PATCH",
        body: JSON.stringify({
          tutorid: decoded.id,
          parentid: parentid,
        }),
      });
      const jobs = await response.json();
      // setAppliedJobs(jobs);
    } catch (error) {
      console.log("error.message");
    }
  };
  console.log(appliedJobs);

  const handleConfirm = (parentid) => {
    console.log(parentid);
    // setConfirmation(false);
    AppliedJobs(parentid);
    alert("You have applied for a job!");
  };

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  const previewFx = (e) => {
    e.preventDefault();
    setPreview(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setPreview(false);
    setConfirmation(false);
  };

  const results = props.data?.map((item) => {
    return (
      <div
        key={item._id}
        id={item._id}
        onClick={previewFx}
        class=" bg-gray-400/75 antialiased text-gray-900 p-10 grid grid-cols-1"
      >
        <div class="h-auto rounded-t text-center overflow-hidden grid grid-cols-2">
          <img
            src="https://i.imgur.com/HX0thFe.png"
            alt=" assignment image"
            class="place-content-center shadow-md"
          />

          <div class="relative px-4 -mt-16 grid grid-span-2 bg-white/50 rounded-r-3xl shadow-lg">
            <div class="mt-40 text-2xl" id="font">
              <h6 class="uppercase"> Child's Name: {item.childName}</h6>
              <h6>Child's level: {item.level}</h6>
              <h6>Subjects: {item.subject}</h6>
              <h6>Frequency: {item.frequency}</h6>
              <h6>Preferred days: {item.days}</h6>
              <h6>Rate: {item.rate}</h6>
            </div>

            <div>
              <button
                class="border-solid text-teal-600 text-2xl bg-teal-200  px-5 py-3 inline-block rounded-full  uppercase font-semibold tracking-wide"
                onClick={() => {
                  handleConfirm(item._id);
                }}
              >
                Apply
              </button>
              {/* </div> */}
            </div>
          </div>

          {/* <h6> jobid: {item.assignments._id}</h6> */}

          {/* //every single modal should have a state */}
        </div>

        {/* {preview && (
          <div>
            <JobDetailsModal
              id={item._id}
              title="Assignment Details"
              childName={item.childName}
              level={item.level}
              subject={item.subject}
              duration={item.duration}
              frequency={item.frequency}
              days={item.days}
              rate={item.rate}
              availability={item.availability}
              onClick={closeModal}
            ></JobDetailsModal>
          </div>
        )} */}

        {/* {confirmation && (
          <ConfirmationModal
            jobid={item._id}
            title="Confirmation of application"
            message="Would you like to confirm your application for this job?"
            onClick={closeModal}
            handleClick={handleConfirm}
            parentid={item._id}
          ></ConfirmationModal>
        )} */}

        {/* <AppliedJobs id={item.jobid}></AppliedJobs> */}
      </div>
    );
  });

  return <>{results}</>;
};

export default JobCard;
