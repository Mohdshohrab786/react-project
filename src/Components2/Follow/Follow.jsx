// src/components/AksHeroSection.js
import React from "react";
import "./Follow.css";
import { TypeAnimation } from "react-type-animation";

const AksHeroSection = () => {
  return (
    <div className="aks-hero">
      <div className="aks-hero-content">
        <h2>
          <TypeAnimation
            sequence={[
              "Smart Law", // Types
              1000, // Waits 1s
              "Smarter Outcomes", // Replaces
              1500,

              "", // Clears
              1000, // Clears
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            // style={{
            //   fontSize: "24px",
            //   fontFamily: "monospace",
            //   display: "inline-block",
            //   color: "#222",
            // }}
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
