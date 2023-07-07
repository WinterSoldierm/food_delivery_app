import React, { useState } from "react";
import "./Register.scss";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
    mobileno: "",
  });

  const handleSumbmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createUser", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        mobileno: credentials.mobileno,
        password: credentials.password,
        location: credentials.location,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("enter valid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />
      <div className="r-wrapper">
        <div className="r-container">
          <div className="r-left">
            <div className="image-container">
              <img src="./c2.jpg" alt="img" />
            </div>
          </div>
          <div className="r-right">
            <form onSubmit={handleSumbmit}>
              <div className="form">
                <span className="orangeText">Register</span>
                <input
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="mobileno"
                  value={credentials.mobileno}
                  onChange={onChange}
                  placeholder="Mobile Number"
                  maxLength="10"
                />
                <input
                  type="text"
                  name="location"
                  value={credentials.location}
                  onChange={onChange}
                  placeholder="Location"
                />
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  placeholder="abc@gmail.com"
                />
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  placeholder="********"
                />
                <button className="button">Sign Up</button>
                <Link className="secondaryText" to={"/login"}>
                  Already Register?
                  <span className="orangeText login">Log In</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
