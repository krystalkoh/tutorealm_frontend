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
      <div>
        <h1>Login</h1>
      </div>
      {!login && <p>Please provide the correct email and password</p>}
      <form onSubmit={handleLogin}>
        <label>Login email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
          required
        />
        <br></br>

        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
