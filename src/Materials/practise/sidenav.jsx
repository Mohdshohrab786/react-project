// src/components/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidecomp.css";


const Sidebar = () => {
  const location = useLocation();
const services = [
  { name: "Litigation", link: "/litigation" },
  { name: "Arbitration", link: "/arbitration" },
  { name: "General Corporate and Commercial", link: "/general-corporate-and-commercial" },
  { name: "Private Equity and Venture Capital", link: "/private-equity-and-venture-capital" },
  { name: "Start-Ups Consultancy", link: "/start-ups-consultancy" },
  { name: "Debt Funding", link: "/debt-funding" },
  { name: "Contract Management", link: "/contract-management" },
  { name: "Labour and Employment Laws", link: "/labour-and-employment-laws" },
  { name: "Intellectual Property Laws", link: "/intellectual-property-low-and-cyber-low" },
  { name: "Project Financing", link: "/projects-and-project-finance" },
  { name: "Legal Metrology", link: "/legal-metrology" },
  { name: "Software Agreement & Related Advisory", link: "/software-agreement-related-advisory" },
  { name: "IT/ITES", link: "/it-ites" },
  { name: "Mergers and Acquisitions", link: "/mergers-and-acquisitions" },
  { name: "Secretarial Compliance", link: "/secretarial-compliance" },
  { name: "Competition Practice", link: "/competition-practice" },
  { name: "Corporate & Regulatory Compliance", link: "/corporate-regulatory-compliance" },
  { name: "Infrastructure and Energy", link: "/#" },
];
  return (
    <div className="services-sidebar">
      <ul>
        {services.map((service) => (
          <li
            key={service.name}
            className={location.pathname === service.link ? "active" : ""}
          >
            <Link to={service.link}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
