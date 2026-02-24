import React from "react";
import "./TeamDetail.css";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const TeamDetail = ({ name, position, email, image, sections, phone, linkedIn = [] }) => {
  return (
    <div className="team-detail-container">
      <span className="back-link">
        <Link to="/team" className="back-btn">
    &larr; Back

  </Link>
  </span>
      {/* Header Section */}
      <div className="team-detail-header">
        <img src={image} alt={name} className="profile-img" />
        <div className="team-detail-intro">
          
          <h1 className="name">{name}</h1>

          {position && <h3 className="position">{position}</h3>}
          {email && (<div className="team-contact-details">
            <p className="email">
              <span className="team-contact-icon"><FaPhone/></span>{" "}
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p className="email">
              <span className="team-contact-icon"><FaEnvelope/></span>{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </p>
              <p className="email">
              <span className="team-contact-icon"><FaLinkedin/></span>{" "}
              <a href={`${linkedIn}`}>{linkedIn}</a>
            </p>
            
            
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <div className="team-detail-section" key={index}>
          <h2>{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul>
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamDetail;
