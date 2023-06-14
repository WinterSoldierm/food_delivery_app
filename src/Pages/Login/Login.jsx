import React from "react";
import "./Login.scss";
import Header from "../../Components/Header/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="l-wrapper">
        <div className="l-container paddings innerWidth flexCenter">
          <div className="l-left">
            <div className="image-container">
              <img src="./c1.jpg" alt="" />
            </div>
          </div>
          <div className="l-right">
            <h1 className="orangeText">Login</h1>
            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="abc@email.com"
                name="e-mail"
                id="e-mail"
                required
              />
              <label htmlFor="e-mail" className="form__label">
                e-mail
              </label>
            </div>
            <div className="form__group field">
              <input
                type="password"
                className="form__field"
                placeholder="********"
                name="password"
                id="password"
                required
              />
              <label htmlFor="password" className="form__label">
                password
              </label>
            </div>
            <button className="button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
