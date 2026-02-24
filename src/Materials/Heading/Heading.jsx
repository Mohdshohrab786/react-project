import React from "react";
import "./Heading.css";

const SectionHeading = ({ title }) => {
  return (
    <div className="heading-container">
      <h2 className="section-heading">{title}</h2>
      <div className="underline" />
    </div>
  );
};

export default SectionHeading;
