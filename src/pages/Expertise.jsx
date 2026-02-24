import React from "react";
import ImgHero from "../imgs/heroImgs/ExpertiseHero.jpeg";
import HeroImg from "../Materials/Hero/HeroImg";
import Heading from "../Materials/Heading2/Heading";
// import Link from "../Materials/Buttons/Button";
import { Link } from "react-router-dom";
import SectionContainer from "../Materials/Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Expertice.css";
import {
  faBalanceScale,
  faGavel,
  faBuilding,
  faHandshake,
  faBriefcase,
  faFileContract,
  faUsers,
  faLightbulb,
  faProjectDiagram,
  faChartLine,
  faLaptopCode,
  faIndustry,
  faBolt,
  faUserShield,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
  const menuItems = [
    { title: "Litigation", link: "/litigation", icon: faGavel },
    { title: "Arbitration", link: "/arbitration", icon: faBalanceScale },
    {
      title: "General Corporate and Commercial",
      link: "/general-corporate-and-commercial",
      icon: faBuilding,
    },
    {
      title: "Private Equity and Venture Capital",
      link: "/private-equity-and-venture-capital",
      icon: faHandshake,
    },
    {
      title: "Start-Ups Consultancy",
      link: "/start-ups-consultancy",
      icon: faLightbulb,
    },
    { title: "Debt Funding", link: "/debt-funding", icon: faChartLine },
    {
      title: "Contract Management",
      link: "/contract-management",
      icon: faFileContract,
    },
    {
      title: "Labour and Employment Laws",
      link: "/labour-and-employment-laws",
      icon: faUsers,
    },
    {
      title: "Intellectual Property Laws",
      link: "/intellectual-property-low-and-cyber-low",
      icon: faUserShield,
    },
    {
      title: "Project Financing",
      link: "/projects-and-project-finance",
      icon: faProjectDiagram,
    },
    {
      title: "Legal Metrology",
      link: "/legal-metrology",
      icon: faClipboardCheck,
    },
    {
      title: "Software Agreement & Related Advisory",
      link: "/software-agreement-related-advisory",
      icon: faLaptopCode,
    },
    { title: "IT/ITES", link: "/it-ites", icon: faIndustry },
    {
      title: "Mergers and Acquisitions",
      link: "/mergers-and-acquisitions",
      icon: faBriefcase,
    },
    {
      title: "Secretarial Compliance",
      link: "/secretarial-compliance",
      icon: faClipboardCheck,
    },
    {
      title: "Competition Practice",
      link: "/competition-practice",
      icon: faBolt,
    },
    {
      title: "Corporate & Regulatory Compliance",
      link: "/corporate-regulatory-compliance",
      icon: faBuilding,
    },
    { title: "Infrastructure and Energy", link: "/#", icon: faIndustry },
  ];

  return (
    <>
      <HeroImg image={ImgHero}> Expertise</HeroImg>
      <SectionContainer urclasses="practice-menu">
        <div className="container">
          <ul className="practice-cards">
            {menuItems.map((item, index) => (
              <li key={index} className="practice-card">
                <Link to={item.link}>
                  <FontAwesomeIcon icon={item.icon} className="practice-icon" />
                  <h4 className="practice-title">{item.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </>
  );
};

export default Expertise;
