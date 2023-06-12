import React from "react";
import "./Card.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Card = () => {
  const options = [1, 2, 3];
  const defaultOption = options[0];
  return (
    <div>
      <div className="c-wrapper">
        <div className="c-container">
          <div className="card">
            <Dropdown
              options={options}
              //   onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select no. of orders"
              className="dropdown"
            />
            <img src="./c1.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
