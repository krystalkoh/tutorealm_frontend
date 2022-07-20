import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleParentClick = () => {
    navigate("/parent/login");
  };

  const handleTutorClick = () => {
    navigate("/tutor/login");
  };
  return (
    <>
      <div class="flex place-content-center mt-28 text-5xl " id="title">
        Are you logging in as a parent or tutor?
      </div>
      <div class="flex place-content-center mt-28 ">
        <button
          id="button"
          onClick={handleParentClick}
          class="place-content-center rounded px-7 py-2 pt-5 mt-4 ml-4 bg-teal-400/50  text-2xl"
        >
          <img
            src="https://i.imgur.com/nFbNaxg.png"
            width="300px"
            class="rounded-lg"
          ></img>
          Parent
        </button>
        <button
          id="button"
          onClick={handleTutorClick}
          class="place-content-center rounded px-7 py-2 pt-5 mt-4 ml-20 bg-teal-400/50  text-2xl"
        >
          <img
            src="https://i.imgur.com/SadPIF1.png"
            width="325px"
            class="rounded-lg"
          />
          Tutor
        </button>
      </div>
    </>
  );
};

export default LoginPage;
