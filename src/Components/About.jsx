import React from "react";
import SectionContainer from "../Materials/Section/Section";
import Container from "../Materials/Container";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid about-section">
      <div className="row no-gutters">
        <div className="col-md-4 col-about-1">
          <SectionContainer>
            <h3>Ask Partners</h3>
            <p>Get expert legal advice from our experienced partners.</p>
            <a href="/ask-partners" className="learn-link">
              Learn More →
            </a>
          </SectionContainer>
        </div>
        <div className="col-md-4 col-about-2">
          <SectionContainer>
            <h3>Consultations</h3>
            <p>Schedule personalized consultations tailored to your needs.</p>
            <a href="/consultations" className="learn-link">
              Learn More →
            </a>
          </SectionContainer>
        </div>
        <div className="col-md-4 col-about-3">
          <SectionContainer>
            <h3>Legal Resources</h3>
            <p>Access a wide range of legal articles, case studies and more.</p>
            <a href="/legal-resources" className="learn-link">
              Learn More →
            </a>
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

export default About;
