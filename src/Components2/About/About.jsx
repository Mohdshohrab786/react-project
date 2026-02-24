import React from "react";
import Heading from "../../Materials/Heading2/Heading";
import "./About.css"; // Assuming you have a CSS file for styling
import Container from "../../Materials/Container";
import SectionContainer from "../../Materials/Section/Section";
import ImageGrid from "../img-grid/img-grid";
import Link from "../../Materials/Buttons/Button";

const About = () => {
  return (
    <SectionContainer placeholder={"white"}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Heading title="About Us" color="green" />
            <p>
              We are a contemporary full-service law firm with lawyers who bring
              over three decades of experience. We are committed to delivering
              practical and business-focused legal solutions using global best
              practices.
            </p>
            <p>
              Our vision for Smart Law goes beyond mere adaptation; it’s about
              shaping a legal practice that combines deep expertise with
              forward-thinking strategies. In a world where legal challenges
              grow more intricate, our commitment to integrity, trust, and
              excellence guides every decision we make
            </p>

            <Link color={"blue"} />
          </div>
          <div className="col-md-5">
            <ImageGrid />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
