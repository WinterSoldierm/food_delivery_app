import React from "react";
import "./Footer.scss";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="f-wrapper">
        <div className="f-container">
          <div className="footer">
            <span className="secondaryText">Copyright @2023 Food Lio.</span>
            <span className="secondaryText">Social Media</span>
            <div className=" icons">
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
                <BsFacebook />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
