import React from "react";
import "./Header.scss";

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
            <a href="/">
              <span>Home</span>
            </a>
            <button>
              <a href="/">Login</a>
            </button>
            <button>
              <a href="/">Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
