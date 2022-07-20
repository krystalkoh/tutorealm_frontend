import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const UpdatePersonalDetails = () => {
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getPersonalDetails = async () => {
    let result = await fetch(`http://localhost:5001/parent/registration`);
    console.log(result);
    result = await result.json();
    setEmail(result.email);
    setParentName(result.parentName);
    setPhone(result.phone);
    setAddress(result.address);
    setPassword(result.password);
  };

  useEffect(() => {
    getPersonalDetails();
  }, []);

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

  // Handling form update
  const updatePersonal = async (e) => {
    e.preventDefault();
    let result = await fetch(`http://localhost:5001/api/parent/registration`, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + authService.getCurrentUser().access,
      },
      method: "PATCH",
      body: JSON.stringify({
        email: email,
        parentName: parentName,
        phone: phone,
        address: address,
        password: password,
      }),
    });
    const data = await result.json();
    console.log(data);
    if (data) {
      navigate("/parent/jobs");
    }
  };

  return (
    <>
      <div>
        <h1>Update Personal Details</h1>
      </div>
      <form onSubmit={updatePersonal}>
        <div>
          <div>
            <label>Parent's email </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label>Parent's name </label>
            <input
              type="text"
              placeholder="Name of parent"
              name="parentName"
              value={parentName}
              onChange={handleParentName}
            />
          </div>
          <div>
            <label>Parent's phone number </label>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={phone}
              onChange={handlePhone}
            />
          </div>
          <div>
            <label>Address </label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleAddress}
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
        </div>
        <div>
          <button type="submit" class="btn" onClick={updatePersonal}>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdatePersonalDetails;
