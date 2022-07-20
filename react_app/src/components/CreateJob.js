import React, { useState } from "react";
import CreateJobModal from "./CreateJobModal";
import authService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  //States for job creation
  const [childName, setChildName] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");
  const [days, setDays] = useState("");
  const [rate, setRate] = useState("");
  const [createJob, setCreateJob] = useState(false);
  let navigate = useNavigate();

  //State for modal to show
  const [show, setShow] = useState(false);

  //Handling changes
  const handleChildName = (e) => {
    setChildName(e.target.value);
  };
  const handleLevel = (e) => {
    setLevel(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleFrequency = (e) => {
    setFrequency(e.target.value);
  };
  const handleDays = (e) => {
    setDays(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const addJob = async (
    childName,
    level,
    subject,
    duration,
    frequency,
    days,
    rate
  ) => {
    await fetch("http://localhost:5001/api/parent/create", {
      method: "PATCH",
      body: JSON.stringify({
        childName: childName,
        level: level,
        subject: subject,
        duration: duration,
        frequency: frequency,
        days: days,
        rate: rate,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + authService.getCurrentUser().access,
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
      });

    setChildName("");
    setLevel("");
    setSubject("");
    setDuration("");
    setFrequency("");
    setDays("");
    setRate("");
    setCreateJob(true);
    navigate("/parent/jobs");
  };

  //Function to execute after Confirm button is clicked
  const handleConfirmJob = (e) => {
    e.preventDefault();
    addJob(childName, level, subject, duration, frequency, days, rate);
    setShow(false);
  };

  //Show confirmation modal
  const handleConfirmModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <div>
        <h1>Create Assignment</h1>
      </div>
      {createJob ? (
        <p>You have created an assignment successfully</p>
      ) : (
        <p>You can create an assignment if you feel like it</p>
      )}
      <form onSubmit={handleConfirmModal}>
        <div>
          <div>
            <label>Child's name </label>
            <input
              type="text"
              placeholder="Name of child"
              value={childName}
              onChange={handleChildName}
              required
            />
          </div>
          <div>
            <label>Select a level: </label>
            <select name="level" value={level} onChange={handleLevel} required>
              <option value="null"> </option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
              <option value="P4">P4</option>
              <option value="P5">P5</option>
              <option value="P6">P6</option>
              <option value="Sec 1">Sec 1</option>
              <option value="Sec 2">Sec 2</option>
              <option value="Sec 3">Sec 3</option>
              <option value="Sec 4">Sec 4</option>
              <option value="Sec 5">Sec 5</option>
              <option value="JC1">JC 1</option>
              <option value="JC2">JC 2</option>
            </select>
          </div>
          <div>
            <label>Subject </label>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={handleSubject}
              required
            />
          </div>
          <div>
            <label>Duration </label>
            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={handleDuration}
              required
            />
          </div>
          <div>
            <label>Frequency per week</label>
            <input
              type="text"
              placeholder="Frequency"
              value={frequency}
              onChange={handleFrequency}
              required
            />
          </div>
          <div>
            <label>Days </label>
            <input
              type="text"
              placeholder="Which days will tuition be conducted?"
              value={days}
              onChange={handleDays}
              required
            />
          </div>
          <div>
            <label>Rate per hour ($)</label>
            <input
              type="text"
              placeholder="How much are you charging?"
              value={rate}
              onChange={handleRate}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" class="btn">
            Create assignment
          </button>
        </div>
      </form>
      {show && (
        <CreateJobModal
          title="Confirmation"
          message="Are you sure you want to create this job assignment?"
          show={show}
          onClick={handleConfirmJob}
        />
      )}
    </>
  );
};

export default CreateJob;
