import React, { useState } from "react";
import "./Header.scss";
import { Link, Navigate } from "react-router-dom";
import Login from "../Login/Register/Login";
import Register from "../Login/Register/Register";

const Header = () => {
  return (
    <div>
      <div className="h-wrapper">
        <div className="h-container paddings innerWidth">
          <div className="h-left">
            <div className="logo">
              <img src="./logo.jpg" alt="Logo" />
            </div>
          </div>
          <div className="h-right">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/login">
              <button>Log in</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
