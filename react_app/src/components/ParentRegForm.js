import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ParentRegForm = () => {
  //States for registration
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [register, setRegister] = useState(false);
  let navigate = useNavigate();

  //Handling changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleParentName = (e) => {
    setParentName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const addPosts = async (email, parentName, phone, address, password) => {
    await fetch("http://localhost:5001/api/parent/registration", {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        parentName: parentName,
        phone: phone,
        address: address,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
      });
    setEmail("");
    setParentName("");
    setPhone("");
    setAddress("");
    setPassword("");
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(email, parentName, phone, address, password);
    setRegister(true);
  };

  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
      {register ? (
        navigate("/parent/login")
      ) : (
        <p>Please register for an account</p>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>Parent's email </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => handleEmail(e)}
              required
            />
          </div>
          <div>
            <label>Parent's name </label>
            <input
              type="text"
              placeholder="Name of parent"
              name="parentName"
              value={parentName}
              onChange={(e) => handleParentName(e)}
              required
            />
          </div>
          <div>
            <label>Parent's phone number </label>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={phone}
              onChange={(e) => handlePhone(e)}
              required
            />
          </div>
          <div>
            <label>Address </label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => handleAddress(e)}
              required
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => handlePassword(e)}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" class="btn" onClick={(e) => handleSubmit(e)}>
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default ParentRegForm;
