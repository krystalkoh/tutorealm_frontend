import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const PersonalDetails = () => {
  //states
  const [gender, setGender] = useState("male");
  const [name, setName] = useState("");
  const [edulevel, setEdulevel] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const getPersonalDetails = async () => {
    let result = await fetch(`http://localhost:5001/api/tutor/registration`, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + authService.getCurrentUser().access,
      },
      method: "GET",
    });
    const data = await result.json();
    setGender(data.gender);
    setName(data.name);
    setEdulevel(data.edulevel);
    setPhone(data.phone);
    setAddress(data.address);
  };

  useEffect(() => {
    getPersonalDetails();
  }, []);

  //handling changes

  //gender
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  //name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //Edulevel
  const handleEdulevelChange = (event) => {
    setEdulevel(event.target.value);
  };
  //Phone
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  //Address
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  //form update
  const updateProfile = async (e) => {
    e.preventDefault();
    let result = await fetch("http://127.0.0.1:5001/api/tutor/registration", {
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + authService.getCurrentUser().access,
      },
      method: "PATCH",
      body: JSON.stringify({
        gender: gender,
        name: name,
        edulevel: edulevel,
        phone: phone,
        address: address,
      }),
    });
    const data = await result.json();
    console.log(data);
    if (data) {
      navigate("/tutor/available");
    }
  };

  return (
    <>
      <div>
        <h1>Update Personal Details</h1>
      </div>
      <form className="container" onSubmit={updateProfile}>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <select
              id="genderSelection"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
            </select>
            <br></br>
            <div></div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <input
                id="edulevel"
                type="text"
                placeholder="Highest Education"
                value={edulevel}
                onChange={handleEdulevelChange}
              />
            </div>
            <div>
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={handlePhoneChange}
              />
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit" class="btn" onClick={updateProfile}>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
