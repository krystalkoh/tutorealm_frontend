import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const ParentLogin = (props) => {
  //States for login
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  //Handling changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    authService
      .loginParent(email, password)
      .then(() => {
        navigate("/parent/jobs");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLogin(true);
  };

  return (
    <>
      <div class="flex place-content-center mt-5 text-5xl " id="title">
        <h1>Parent Login</h1>
      </div>
      <img
        src="https://i.imgur.com/nFbNaxg.png"
        width="300px"
        class="rounded-lg"
        id="img"
      ></img>

      {!login && (
        <p class="flex place-content-center mt-5 text-lg ">
          Please login with your email and password
        </p>
      )}
      <form
        id="font"
        onSubmit={(e) => handleLogin(e)}
        class="flex place-content-center mt-5 text-xl"
      >
        <label class="text-2xl" id="font">
          Email:{" "}
        </label>
        <input
          class="ml-4 mr-10"
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleEmail(e)}
        />
        <label class="text-2xl" id="font">
          Password:{" "}
        </label>
        <input
          class="ml-4"
          type="password"
          name="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <div>
          <button
            id="submit"
            class="rounded ml-20 bg-teal-400/50  text-lg px-6 py-2"
            type="submit"
            onClick={(e) => handleLogin(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ParentLogin;
