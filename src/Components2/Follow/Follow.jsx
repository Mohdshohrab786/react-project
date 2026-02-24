// src/components/AksHeroSection.js
import React from "react";
import "./Follow.css";
// import { TypeAnimation } from "react-type-animation";
import { TypeAnimation } from "react-type-animation";

const AksHeroSection = () => {
  return (
    <div className="aks-hero">
      <div className="aks-hero-content">
        <h2>
         <TypeAnimation
  sequence={[
    "Smart Law",
    2000,
    "Smarter Outcomes",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
        </h2>
        <p>
          <a href="#">Contact us</a> to learn more about{" "}
          <strong>AKS Partners</strong>.
        </p>
      </div>
    </div>
  );
};

export default AksHeroSection;
