import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Link2 = ({ color, link }) => {
  return (
    <>
    <Link to="/Awards">
    <div className={`learn-more-btn ${color}`}>
      <span className="arrow">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <span className="text">Learn More</span>
    </div>
    </Link>
    </>
  );
};
export default Link2;
