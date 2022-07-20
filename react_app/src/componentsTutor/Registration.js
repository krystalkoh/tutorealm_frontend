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
      <div>
        <h1>Register</h1>
      </div>
      {register ? (
        navigate("/tutor/login") //might want to see if redirect to available jobs?
      ) : (
        <p>Please Register For An Account</p>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Email</label>
          <div>
            <input
              id="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => handleEmail(e)}
              required
            />
            <br></br>
            <select id="genderSelection" value={gender} onChange={handleGender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
            </select>
            <br></br>
            <div>
              <input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => handlePassword(e)}
                required
              />
            </div>
            <div>
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
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => handlePhone(e)}
                required
              />
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => handleAddress(e)}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" class="btn" onClick={(e) => handleSubmit(e)}>
          Register
        </button>
      </form>
    </>
  );
};

export default Registration;
