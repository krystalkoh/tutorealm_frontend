import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleParentClick = () => {
    navigate("/parent/register");
  };

  const handleTutorClick = () => {
    navigate("/tutor/register");
  };
  return (
    <>
      <div>Are you registering as a parent or tutor?</div>
      <button onClick={handleParentClick}>Parent</button>
      <button onClick={handleTutorClick}>Tutor</button>
    </>
  );
};

export default RegisterPage;
