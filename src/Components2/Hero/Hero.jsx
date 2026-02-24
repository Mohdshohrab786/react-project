// src/components/HeroSection.js
import React from "react";
import "./Hero.css";
import heroImage from "../../imgs/profile.jpg"; // Adjust the path as necessary
import Heading from "../../Materials/Heading2/Heading";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="glass-box">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-img-glass">
              <img src={heroImage} alt="Hero" className="hero-image-2" />
            </div>
            <div className="col-md-8 col-sm-8 col-text-glass">
              <Heading title="From the Founder's Desk" color="green"></Heading>
              <br />
              <br />
              <p>
                AKS Partners is a modern, innovation-led law firm that has built
                a reputation for handling some of the most complex and
                high-stakes transactions ethically and with precision.
              </p>
              {/* <p>
                We pride ourselves in collaborating with our clients and
                advising them on matters that are first-of-their-kind, whether
                in scale, structure, or impact, setting benchmarks across
                industries.
              </p> */}
              <p>
                We rely on sharp legal insight, strategic clarity, and the smart
                use of technology to deliver outcomes that aren’t just smart –
                they are smarter than the rest.
              </p>
              <p className="signature">Sonal Kumar Singh</p>
              <span>Founder & Managing Partner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
