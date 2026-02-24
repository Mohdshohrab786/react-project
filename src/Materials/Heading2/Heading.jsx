// src/components/HeroSection.js
import React from "react";
import "./Heading.css";

const Heading = ({ title, color }) => {
  return <h1 className={color}>{title}</h1>;
};

export default Heading;
