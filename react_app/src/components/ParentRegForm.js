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
      <div class="flex place-content-center mt-5 text-5xl " id="title">
        <h1>Register</h1>
      </div>
      {register ? (
        navigate("/parent/login")
      ) : (
        <p class="flex place-content-center mt-5 text-lg ">
          Please register for a parent's account
        </p>
      )}
      <header class="flex justify-between items-center mt-28">
        <div class="pl-40 w-2/5 ">
          <img src="      https://i.imgur.com/CU5wBIt.png" />
        </div>

        <div class="text-xl w-2/5 mr-40 ml-10">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div>
                <label class="text-2xl mr-10">Parent's email: </label>
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
                <label class="text-2xl mr-10">Parent's name: </label>
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
                <label class="text-2xl mr-10">Parent's phone number: </label>
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
                <label class="text-2xl mr-10">Address: </label>
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
                <label class="text-2xl mr-10">Password: </label>
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
              <button
                type="submit"
                id="submit"
                class="rounded  bg-teal-400/50 text-lg px-6 py-2 mt-10 ml-40"
                onClick={(e) => handleSubmit(e)}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default ParentRegForm;
