import React from "react";
import "./HeroImg.css";

const BackgroundImage = ({ image, children }) => {
  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="overlay"></div>
      <div className="content background-img-content">
        <h2>{children}</h2>
      </div>
    </div>
  );
};

export default BackgroundImage;
