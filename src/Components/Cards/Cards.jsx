import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";
const Cards = () => {
  return (
    <div>
      <div className="cards-wrapper">
        <div className="cards-container">
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
