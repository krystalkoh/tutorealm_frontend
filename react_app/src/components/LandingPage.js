import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../index.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };
  return (
    <>
      <button
        onClick={handleLoginClick}
        id="button"
        class="rounded px-4 py-2 mt-4 ml-4 bg-violet-300 text-xl"
      >
        Login
      </button>
      <button
        id="button"
        class="rounded px-4 py-2 mt-4 ml-4 bg-violet-300 text-xl"
        onClick={handleRegisterClick}
      >
        Register
      </button>
      <header class="flex justify-between items-center mt-28">
        <div class="pl-40 w-3/5 ">
          <div>Introducing</div>
          <div id="title" class="text-8xl">
            TUTOREALM
          </div>
          <p class="text-red-700 mt-4"> Short description here</p>
        </div>

        <div class="w-2/5 mr-40">
          <img src="https://i.imgur.com/G7Npd0b.jpg" alt="Login Picture" />
        </div>

        <br />
      </header>
    </>
  );
};

export default LandingPage;
