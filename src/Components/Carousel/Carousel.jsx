import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
const Carousel = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    width: "30rem",
    height: "40rem",
    overflow: " hidden",
  };

  const slideImages = [
    { url: "./c2.jpg" },
    { url: "./c3.jpg" },
    { url: "./c4.jpg" },
    { url: "./c5.jpg" },
    { url: "./c6.jpg" },
    { url: "./c7.jpg" },
    { url: "./c8.jpg" },
    { url: "./c9.jpg" },
    { url: "./c10.jpg" },
    { url: "./c11.jpg" },
    { url: "./c12.jpg" },
  ];

  const buttonStyle = {
    display: "none",
  };

  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>,
  };
  return (
    <div>
      <div className="car-wrapper">
        <div className="car-container">
          <div className="image">
            <Fade
              autoplay="true"
              duration={2000}
              infinite="true"
              {...properties}
            >
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <img
                    src={slideImages.url}
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
