import React from "react";
import "./Detail.scss";
import Dropdown from "react-dropdown";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { TiShoppingCart } from "react-icons/ti";

const Detail = () => {
  const options = ["1", "2", "3"];
  const defaultOption = options[0];
  // console.log(defaultOption);
  const size = ["Full", "Half"];
  const defaultSize = size[0];
  return (
    <div>
      <div className="d-wrapper">
        <Header />
        <div className="paddings innerWidth d-container">
          <div className="d-left">
            <div className="image-container">
              <img src="./c1.jpg" alt="Image" />
            </div>
          </div>
          <div className="d-right">
            <h1 className="primaryText">Title</h1>
            <span className="secondaryText">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsam placeat maxime maiores perferendis tempore atque
              impedit corrupti accusantium quibusdam id aperiam, deleniti nemo
              laudantium quod recusandae reiciendis non eaque alias! Doloribus,
              at!
            </span>
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
            </div>
            <span className="orangeText">Total Price:₹999</span>

            <button className="btn">
              <span className="icon">
                <TiShoppingCart /> &nbsp; Add to Cart
              </span>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
