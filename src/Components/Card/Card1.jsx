import React from "react";
import "./Card1.scss";
import { Link } from "react-router-dom";

const Card1 = () => {
  return (
    <div>
      <Link to="/detail">
        <figure className="card1">
          <img src="./c13.jpg" alt="" />
          <figcaption>Title</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Card1;
