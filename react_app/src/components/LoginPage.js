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
      <div>Are you logging in as a parent or tutor?</div>
      <button onClick={handleParentClick}>Parent</button>
      <button onClick={handleTutorClick}>Tutor</button>
    </>
  );
};

export default LoginPage;
