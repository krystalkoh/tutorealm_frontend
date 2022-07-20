import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const Login = (props) => {
  //states for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  //handling changes
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    authService
      .login(email, password)
      .then(() => {
        // window.location.reload();
        navigate("/tutor/available");
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLogin(true);
  };
  //Password
  return (
    <>
      <div class="flex place-content-center mt-5 text-5xl " id="title">
        <h1>Tutor Login</h1>
      </div>

      <img
        src="https://i.imgur.com/SadPIF1.png"
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
        class="flex place-content-center mt-5 text-xl"
        id="font"
        onSubmit={handleLogin}
      >
        <label class="text-2xl" id="font">
          {" "}
          Email:
        </label>
        <input
          class="ml-4 mr-10"
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
          required
        />
        <br></br>
        <label class="text-2xl" id="font">
          Password:
        </label>
        <input
          class="ml-4"
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <div>
          <button
            id="submit"
            class="rounded ml-20 bg-teal-400/50  text-lg px-6 py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
