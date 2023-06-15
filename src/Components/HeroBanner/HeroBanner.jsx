import React from "react";
import "./HeroBanner.scss";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

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
            <div>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
