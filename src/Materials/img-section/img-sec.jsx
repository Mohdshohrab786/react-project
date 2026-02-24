import React from "react";
import "./img-sec.css";
import Heading from "../../Materials/Heading2/Heading";
import Link from "../../Materials/Buttons/Button";

const ImgSection = ({ children, title, headingcolor }) => {
  return (
    <section className="img-section-background">
      <div className="container">{children}</div>
    </section>
  );
};

export default ImgSection;
