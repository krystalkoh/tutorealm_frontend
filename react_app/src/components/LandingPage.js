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
      <div>Introducing</div>
      <div className="title">TUTOREALM</div>
      <div class="text-red-700"> Short description here</div>
      <br />
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </>
  );
};

export default LandingPage;
