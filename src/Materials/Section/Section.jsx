import React from "react";
import "./Section.css";

const SectionContainer = ({ children, placeholder, urclasses }) => {
  return (
    <div className={`section-container ${placeholder} ${urclasses}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
