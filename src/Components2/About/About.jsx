import React from "react";
import Heading from "../../Materials/Heading2/Heading";
import "./About.css"; // Assuming you have a CSS file for styling
import Container from "../../Materials/Container";
import SectionContainer from "../../Materials/Section/Section";
import ImageGrid1 from "../img-grid/img-grid1";
import Link from "../../Materials/Buttons/Button";


const About = () => {
  return (
    <SectionContainer placeholder={"white"}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Heading title="About Us" color="green" />
           <p>
  We are a contemporary full-service law firm with lawyers who bring over three decades of experience. We are committed to delivering practical and business-focused legal solutions using global best practices, ensuring that our clients receive strategic guidance tailored to their industries and long-term objectives, while maintaining the highest standards of professionalism, responsiveness, and client-focused service excellence.
</p>

<p>
  Our vision for Smart Law goes beyond mere adaptation; it’s about shaping a legal practice that combines deep expertise with forward-thinking strategies. In a world where legal challenges grow more intricate, our commitment to integrity, trust, and excellence guides every decision we make, fostering lasting partnerships and consistently delivering value-driven, solution-oriented legal counsel across diverse sectors and complex regulatory environments worldwide.
</p>

            <Link color={"blue"} />
          </div>
          <div className="col-md-5">
            <ImageGrid1 />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
