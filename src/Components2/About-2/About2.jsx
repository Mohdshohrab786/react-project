import React from "react";
import "./About2.css";
import Heading from "../../Materials/Heading2/Heading";
import Link from "../../Materials/Buttons/Button";
import SectionContainer from "../../Materials/Section/Section";

const LawSection = () => {
  return (
    <SectionContainer urclasses="law-section">
      <div className="grid-container container">
        {/* Upper Left Block (Glass Text) */}
        <div className="glass-block">
          <Heading title="Expertise & Excellence" color="green" />
          <p>
            At AKS Partners, we pursue legal mastery with strategic insight to
            deliver impactful outcomes.
          </p>

          <Link color="blue about-2-link" />
        </div>

        {/* Upper Right Image Block */}
        <div className="image-block image1"></div>

        {/* Lower Left Image Block */}
        <div className="image-block image2"></div>

        {/* Lower Right Block (Glass Text) */}
        <div className="glass-block">
          <Heading title="Client Focused" color="green" />
          <p>
            Every client is unique — our legal services are tailored to align
            with your specific goals.
          </p>
          <Link color="blue about-2-link" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default LawSection;
