import React, { useEffect, useState } from "react";
import ConfirmHireModal from "./ConfirmHireModal";
import TutorPreviewModal from "./TutorPreviewModal";
import { useNavigate, useParams } from "react-router-dom";
import authService from "../services/AuthService";

const TutorList = (props) => {
  const [showPreview, setShowPreview] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [tutorsData, setTutorsData] = useState([]);
  const fetchTutors = async (id) => {
    console.log(`fetching tutors`);
    const res = await fetch(
      `http://localhost:5001/api/parent/tutorsApplied/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + authService.getCurrentUser().access,
        },
      }
    );
    const tutors = await res.json();
    console.log(tutors);

    setTutorsData(tutors);
  };

  // on page load
  useEffect(() => {
    fetchTutors(id);
  }, []);

  const handlePreviewModal = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleConfirmHiremModal = (e) => {
    console.log(id);
    // e.preventDefault();
    // setShowConfirmation(true);
    updateJobAvail(id);
    alert("Hired a tutor");
  };

  const handleHireConfirm = (e) => {
    e.preventDefault();
    setShowConfirmation(false);
    navigate("/parent/jobs");
  };

  const updateJobAvail = async (id) => {
    console.log(`updating job avail`);
    const res = await fetch(
      `http://localhost:5001/api/parent/availableJobs/approval`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + authService.getCurrentUser().access,
        },
        body: JSON.stringify({ jobID: id }),
      }
    );
    const job = await res.json();
    console.log(job);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowPreview(false);
    setShowConfirmation(false);
  };

  return (
    <>
      <h1 class="flex place-content-center mt-28 text-5xl " id="title">
        Tutors Who Are Interested In This Assignment
      </h1>
      {tutorsData &&
        tutorsData.map((tutor) => {
          return (
            <>
              <div
                id={tutor.id}
                key={tutor.id}
                onClick={handlePreviewModal}
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
                      <p>{tutor.gender}</p>
                      <p>{tutor.edulevel}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleConfirmHiremModal}
                      class="border-solid text-teal-600 text-2xl bg-teal-200  px-5 py-3 inline-block rounded-full  uppercase font-semibold tracking-wide"
                    >
                      Hire
                    </button>
                  </div>
                </div>
              </div>

              {showPreview && (
                <div onClick={closeModal}>
                  <TutorPreviewModal
                    title="Tutor's profile"
                    name={tutor.name}
                    gender={tutor.gender}
                    edulevel={tutor.edulevel}
                    show={showPreview}
                    onClose={() => setShowPreview(false)}
                  />
                </div>
              )}

              {showConfirmation && (
                <div onClick={closeModal}>
                  <ConfirmHireModal
                    id={tutor.id}
                    title="Hire confirmation"
                    message="Are you sure you want to hire this tutor?"
                    onClick={handleHireConfirm}
                  />
                </div>
              )}
            </>
          );
        })}
    </>
  );
};

export default TutorList;
