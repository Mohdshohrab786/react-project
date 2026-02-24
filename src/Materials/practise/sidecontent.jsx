// src/Materials/practise/Content.js
import React, { useState } from "react";

const SideContent = ({ title, paragraphs = [], accordions = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="services-content">
      <h2>{title}</h2>

      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}

      {accordions.length > 0 && (
        <div className="accordion-container">
          <h2 className="accordion-heading">{title} Practice Areas</h2>
          {accordions.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button
                className={`accordion-title ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="accordion-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideContent;
