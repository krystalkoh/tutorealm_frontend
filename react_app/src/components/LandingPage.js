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
        class="rounded px-5 py-2 mt-4 ml-4 bg-slate-300 text-xl"
      >
        Login
      </button>
      <button
        id="button"
        class="rounded px-4 py-2 mt-4 ml-4 bg-slate-300 text-xl"
        onClick={handleRegisterClick}
      >
        Register
      </button>
      <header class="flex justify-between items-center mt-28">
        <div class="pl-40 w-3/5 ">
          <div id="button" class="text-xl">
            {" "}
            Introducing
          </div>
          <div id="title" class="text-8xl">
            TUTOREALM
          </div>
          <p class="text-red-700 mt-4 text-lg mr-10" id="button">
            {" "}
            Tutorealm: an app designed with freelance tutors and vendors in
            mind. We bring the convenience of a common platform where tutors and
            vendors can communicate to fulfill their needs. Be it looking for
            tutees or looking for tutors, we go beyond to connect your worlds
            together in our realm.
          </p>
        </div>

        <div class="w-2/5 mr-40 ml-10">
          <img src="https://i.imgur.com/G7Npd0b.jpg" alt="Login Picture" />
        </div>

        <br />
      </header>
    </>
  );
};

export default LandingPage;
