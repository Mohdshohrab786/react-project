import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faGavel,
  faShieldAlt,
  faHandshake,
  faBuilding,
  faChartLine,
  faPlane,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
import SectionHeading from "../Materials/Heading/Heading";

const services = [
  { title: "Anti-Trust & Competition", icon: faBalanceScale },
  { title: "Litigation & Dispute Resolution", icon: faGavel },
  { title: "Data Protection & Privacy", icon: faShieldAlt },
  { title: "Corporate Commercial", icon: faBuilding },
  { title: "Mergers & Acquisitions", icon: faHandshake },
  { title: "Aviation", icon: faPlane },
  { title: "Insolvency & Restructuring", icon: faFileContract },
  { title: "Banking & Finance", icon: faChartLine },
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="container">
        <>
          <h3>Are you having any problems but can’t consult to anyone? </h3>

          <p className="pt-2">
            Talk to us! We promise we can help you! Call Now! (1)223-3344-334
          </p>
        </>
        <div className="heading-container pt-4">
          <h2 className="heading">Legal Practices</h2>
          <div className="underline"></div>
        </div>
        <div className="cards-grid">
          {services.map(({ title, icon }, i) => {
            const gradientClass = `gradient-${(i % 3) + 1}`; // 1 to 3 cycling
            return (
              <div className="card" key={i}>
                <div className={`icon-circle ${gradientClass}`}>
                  <FontAwesomeIcon icon={icon} className="icon" />
                </div>
                <h3 className="card-title">{title}</h3>
              </div>
            );
          })}
        </div>

        {/* <div className="cards-grid">
          {services.map(({ title, icon }, i) => (
            <div className="card" key={i}>
              <div className="icon-circle">
                <FontAwesomeIcon icon={icon} className="icon" />
              </div>
              <h3 className="card-title">{title}</h3>
            </div>
          ))} */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Services;
