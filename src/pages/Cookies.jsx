import React from "react";
import ImgHero from "../imgs/heroImgs/ExpertiseHero.jpeg";
import HeroImg from "../Materials/Hero/HeroImg";
import SectionContainer from "../Materials/Section/Section";

const Cookies = () => {
  const containerStyle = {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    lineHeight: "1.9",
    color: "#333",
  };

  const heading2Style = {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "25px",
    textAlign: "center",
  };

  const heading3Style = {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "35px",
    marginBottom: "12px",
    color: "#111",
    borderLeft: "4px solid #c5a47e",
    paddingLeft: "10px",
  };

  const paragraphStyle = {
    marginBottom: "15px",
    fontSize: "15.5px",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "15px",
  };

  const listItemStyle = {
    marginBottom: "8px",
  };

  return (
    <>
      <HeroImg image={ImgHero}>Cookie Policy</HeroImg>

      <SectionContainer>
        <div style={containerStyle}>
          <h2 style={heading2Style}>Cookie Policy</h2>

          <p style={paragraphStyle}>
            This Cookie Policy explains how our Firm uses cookies and similar
            tracking technologies when you visit our website. It describes what
            these technologies are, why we use them, and your rights to control
            their use.
          </p>

          <h3 style={heading3Style}>What Are Cookies?</h3>
          <p style={paragraphStyle}>
            Cookies are small text files stored on your device when you access
            a website. They help improve website functionality, enhance user
            experience, and provide analytical insights about website
            performance.
          </p>

          <h3 style={heading3Style}>Why We Use Cookies</h3>
          <p style={paragraphStyle}>
            We use cookies to ensure our website functions efficiently, enhance
            security, and better understand how visitors interact with our
            content. This allows us to continuously improve our services and
            digital experience.
          </p>

          <h3 style={heading3Style}>Types of Cookies We Use</h3>

          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Essential Cookies:</strong> Required for the proper
              functioning of the website and cannot be disabled.
            </li>
            <li style={listItemStyle}>
              <strong>Performance Cookies:</strong> Help us analyze how users
              interact with our website to improve functionality.
            </li>
            <li style={listItemStyle}>
              <strong>Functional Cookies:</strong> Enable enhanced features and
              personalization.
            </li>
            <li style={listItemStyle}>
              <strong>Security Cookies:</strong> Protect against fraudulent or
              malicious activities.
            </li>
          </ul>

          <h3 style={heading3Style}>Managing Cookies</h3>
          <p style={paragraphStyle}>
            You can manage or disable cookies through your browser settings.
            However, please note that disabling certain cookies may impact
            website functionality and user experience.
          </p>

          <h3 style={heading3Style}>Third-Party Cookies</h3>
          <p style={paragraphStyle}>
            Some cookies may be placed by third-party service providers for
            analytics and performance tracking. These cookies are governed by
            the respective third-party privacy policies.
          </p>

          <h3 style={heading3Style}>Updates to This Policy</h3>
          <p style={paragraphStyle}>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, law, or our business practices. We encourage
            users to review this page periodically.
          </p>

          <h3 style={heading3Style}>Contact Us</h3>
          <p style={paragraphStyle}>
            If you have any questions about our use of cookies, please contact
            us through the details provided on our website.
          </p>
        </div>
      </SectionContainer>
    </>
  );
};

export default Cookies;