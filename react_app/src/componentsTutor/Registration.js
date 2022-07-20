import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  //email
  const [email, setEmail] = useState("");
  //gender
  const [gender, setGender] = useState("male");
  //password
  const [password, setPassword] = useState("");
  //name
  const [name, setName] = useState("");
  //edu level
  const [edulevel, setEdulevel] = useState("");
  //phone
  const [phone, setPhone] = useState("");
  //address
  const [address, setAddress] = useState("");

  const [register, setRegister] = useState(false);
  let navigate = useNavigate();

  //handlingChanges
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  //gender
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //name
  const handleName = (event) => {
    setName(event.target.value);
  };

  //edulevel
  const handleedulevel = (event) => {
    setEdulevel(event.target.value);
  };
  //Phone
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  //Address
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const addPosts = async (
    email,
    gender,
    password,
    name,
    edulevel,
    phone,
    address
  ) => {
    await fetch("http://localhost:5001/api/tutor/registration", {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        gender: gender,
        password: password,
        name: name,
        edulevel: edulevel,
        phone: phone,
        address: address,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
      });
    setEmail("");
    setGender("male");
    setPassword("");
    setName("");
    setEdulevel("");
    setPhone("");
    setAddress("");
  };

  //submit
  const handleSubmit = (event) => {
    event.preventDefault();
    addPosts(email, gender, password, name, edulevel, phone, address);
    setRegister(true);
  };

  return (
    <>
      <div class="flex place-content-center mt-5 text-5xl " id="title">
        <h1>Register</h1>
      </div>
      {register ? (
        navigate("/tutor/login") //might want to see if redirect to available jobs?
      ) : (
        <p class="flex place-content-center mt-5 text-lg ">
          Please register for a tutor's account
        </p>
      )}
      <header class="flex justify-between items-center mt-28">
        <div class="pl-40 w-2/5 ">
          <img src="      https://i.imgur.com/CU5wBIt.png" />
        </div>
        <div class="text-xl w-2/5 mr-40 ml-10">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label class="text-2xl mr-10">Email: </label>

              <input
                id="email"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => handleEmail(e)}
                required
              />
              <br></br>
              <div>
                <label class="text-2xl mr-10">Password: </label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => handlePassword(e)}
                  required
                />
              </div>
              <label class="text-2xl mr-10">Gender: </label>
              <select
                id="genderSelection"
                value={gender}
                onChange={handleGender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-Binary</option>
              </select>
              <br></br>
              <div>
                <label class="text-2xl mr-10">Name: </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => handleName(e)}
                  required
                />
              </div>
              <div>
                <label class="text-2xl mr-10">Highest Education: </label>
                <input
                  id="edulevel"
                  type="text"
                  placeholder="Highest Education"
                  value={edulevel}
                  onChange={(e) => handleedulevel(e)}
                  required
                />
              </div>
              <div>
                <label class="text-2xl mr-10">Phone: </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => handlePhone(e)}
                  required
                />
              </div>
              <label class="text-2xl mr-10">Address: </label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => handleAddress(e)}
                required
              />
            </div>
            <button
              type="submit"
              id="submit"
              class="rounded  bg-teal-400/50 text-lg px-6 py-2 mt-10 ml-40"
              onClick={(e) => handleSubmit(e)}
            >
              Register
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Registration;
