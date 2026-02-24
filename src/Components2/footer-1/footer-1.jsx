import React from "react";
import SectionContainer from "../../Materials/Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCommentDots } from "@fortawesome/free-solid-svg-icons";

import "./footer-1.css";
// 
const Footer1 = () => {
  return (
    <SectionContainer urclasses={"bg-blue"}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <h4>
              {" "}
              <FontAwesomeIcon icon={faPhone} /> Talk to Us{" "}
            </h4>
          </div>
          <div className="col-md-6 text-center">
            <h4>
              <FontAwesomeIcon icon={faCommentDots} /> Chat With Us
            </h4>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer1;
