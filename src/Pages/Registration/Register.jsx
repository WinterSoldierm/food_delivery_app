import React from "react";
import "./Register.scss";
import Header from "../../Components/Header/Header";
const Register = () => {
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
            <div className="form">
              <span className="orangeText">Register</span>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Mobile Number" maxlength="10" />
              <input type="email" placeholder="abc@gmail.com" />
              <input type="password" placeholder="********" />
              <button className="button">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
