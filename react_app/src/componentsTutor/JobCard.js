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

  const results = props.data.map((item) => {
    return (
      <div>
        <div key={item._id} id={item._id} onClick={previewFx}>
          {/* <h6> jobid: {item.assignments._id}</h6> */}
          <h3>Child Name: {item.childName}</h3>
          <h6>Level: {item.level}</h6>
          <h6>Subject: {item.subject}</h6>
          <h6>Days: {item.days}</h6>
          <h6>rate: {item.rate}</h6>
          <h6>frequency: {item.frequency}</h6>
          <h6>parentid: {item._id}</h6>
          {/* //every single modal should have a state */}
        </div>

        <div>
          <button
            onClick={() => {
              handleConfirm(item._id);
            }}
          >
            Apply
          </button>
        </div>

        {preview && (
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
        )}

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
