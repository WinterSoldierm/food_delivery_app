import React from "react";
import "./Card.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";

const Card = () => {
  const options = ["1", "2", "3"];
  const defaultOption = options[0];
  // console.log(defaultOption);
  const size = ["Full", "Half"];
  const defaultSize = size[0];
  return (
    <div>
      <div className="c-wrapper">
        <div className="paddings c-container">
          {/* card 1 */}
          <Link to="/detail" className="card">
            <img src="./c1.jpg" alt="Image" />
            <span className="secondaryText">Title</span>
            <span className="secondaryText">Description</span>
            <div className="drop">
              <Dropdown
                options={options}
                //   onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select no. of orders"
                className="dropdown"
              />

              <Dropdown
                options={size}
                //   onChange={this._onSelect}
                value={defaultSize}
                placeholder="Select Plate"
                className="dropdown"
              />

              <span className="secondaryText">Total Price:</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
