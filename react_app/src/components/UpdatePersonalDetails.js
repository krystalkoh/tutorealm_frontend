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
      <div
        class="flex place-content-center mt-5 text-5xl container mx-auto"
        id="title"
      >
        <h1>Update Personal Details</h1>
      </div>
      <form
        onSubmit={updatePersonal}
        class=" place-content-center mt-5 text-xl grid grid-rows-2"
      >
        <div>
          <div>
            <label class="text-2xl mr-10">My email: </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label class="text-2xl mr-10">My name: </label>
            <input
              type="text"
              placeholder="Name of parent"
              name="parentName"
              value={parentName}
              onChange={handleParentName}
            />
          </div>
          <div>
            <label class="text-2xl mr-10">My phone number: </label>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={phone}
              onChange={handlePhone}
            />
          </div>
          <div>
            <label class="text-2xl mr-10">My Address: </label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleAddress}
            />
          </div>
          <div>
            <label class="text-2xl mr-10">My Password: </label>
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
          <button
            type="submit"
            id="submit"
            class="rounded  bg-teal-400/50 text-lg px-6 py-2 mt-10 ml-40"
            onClick={updatePersonal}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdatePersonalDetails;
