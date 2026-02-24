import React from "react";
import HeroImg from "../../Materials/Hero/HeroImg";
import Sidebar from "../../Materials/practise/sidenav";
import SideContent from "../../Materials/practise/sidecontent";
import "./litigation.css";
const ServicePage = ({ title, heroImage, paragraphs, accordions }) => {
  return (
    <>
      <HeroImg image={heroImage}>Expertice / {title}</HeroImg>

      <div className="services-container">
        <Sidebar />
        <SideContent title={title} paragraphs={paragraphs} accordions={accordions} />
      </div>
    </>
  );
};

export default ServicePage;
