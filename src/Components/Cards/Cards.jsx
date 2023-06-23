import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";
import Card1 from "../Card/Card1";
const Cards = () => {
  return (
    <div>
      <div className="cards-wrapper">
        <div className="cards-container">
          <div className="cards">
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
