import React from "react";
import "./Award.css"; // create CSS for styling

const AwardCard = ({ title, year, image }) => {
  return (
    <div className="award-card">
      <img src={image} alt={title} className="award-image" />
      <div className="award-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default AwardCard;
