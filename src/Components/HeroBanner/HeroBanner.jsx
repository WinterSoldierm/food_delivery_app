import React from "react";
import "./HeroBanner.scss";
import Card from "../Card/Card";

const HeroBanner = () => {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="hero-container paddings innerWidth">
          <div className="flexColStart hero-left">
            <h1 className="orangeText">
              Deliciously Convenient: <br /> Order, Eat, Repeat!
            </h1>
          </div>
          <div className="flexCenter hero-right">
            <div className="image">
              <img src="./c2.jpg" alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
