import React from "react";
import ImgHero from "../imgs/heroImgs/ExpertiseHero.jpeg";
import HeroImg from "../Materials/Hero/HeroImg";
import SectionContainer from "../Materials/Section/Section";

const PrivacyPolicy = () => {
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
      <HeroImg image={ImgHero}>Privacy Policy</HeroImg>

      <SectionContainer>
        <div style={containerStyle}>
          <h2 style={heading2Style}>Privacy Policy</h2>

          <p style={paragraphStyle}>
            This Privacy Policy explains how our Firm collects, uses, protects,
            and handles your personal information when you visit our website
            or engage with our legal services. We are committed to maintaining
            the highest standards of confidentiality, integrity, and data
            protection in line with global best practices.
          </p>

          <h3 style={heading3Style}>About Our Firm</h3>
          <p style={paragraphStyle}>
            We are a contemporary full-service law firm with lawyers bringing
            over three decades of experience. Our practice is committed to
            delivering practical, business-focused legal solutions tailored to
            our clients’ industries and long-term objectives while maintaining
            professionalism, responsiveness, and service excellence.
          </p>

          <h3 style={heading3Style}>Information We Collect</h3>
          <p style={paragraphStyle}>
            We may collect the following types of information:
          </p>

          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Personal Information:</strong> Name, email address,
              phone number, company details, and any information voluntarily
              provided through contact forms or communications.
            </li>
            <li style={listItemStyle}>
              <strong>Technical Information:</strong> IP address, browser type,
              device information, and website usage data.
            </li>
            <li style={listItemStyle}>
              <strong>Professional Information:</strong> Information shared
              with us for legal consultation or engagement purposes.
            </li>
          </ul>

          <h3 style={heading3Style}>How We Use Your Information</h3>
          <p style={paragraphStyle}>Your information may be used to:</p>

          <ul style={listStyle}>
            <li style={listItemStyle}>Respond to inquiries and provide legal services.</li>
            <li style={listItemStyle}>Improve website performance and user experience.</li>
            <li style={listItemStyle}>Maintain communication regarding updates or services.</li>
            <li style={listItemStyle}>
              Ensure compliance with applicable legal and regulatory obligations.
            </li>
          </ul>

          <h3 style={heading3Style}>Confidentiality & Data Protection</h3>
          <p style={paragraphStyle}>
            We implement appropriate technical and organizational measures to
            safeguard your information against unauthorized access, disclosure,
            alteration, or destruction. Confidentiality remains a cornerstone
            of our legal practice and client relationships.
          </p>

          <h3 style={heading3Style}>Data Sharing</h3>
          <p style={paragraphStyle}>
            We do not sell or trade your personal information. Information may
            be shared with trusted service providers or legal authorities only
            where necessary and in compliance with applicable laws.
          </p>

          <h3 style={heading3Style}>Data Retention</h3>
          <p style={paragraphStyle}>
            We retain personal information only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by law.
          </p>

          <h3 style={heading3Style}>Your Rights</h3>
          <p style={paragraphStyle}>
            Depending on applicable laws, you may have the right to access,
            correct, update, or request deletion of your personal information.
            You may contact us to exercise these rights.
          </p>

          <h3 style={heading3Style}>Global Compliance</h3>
          <p style={paragraphStyle}>
            In alignment with our Smart Law vision, we continuously adapt to
            evolving regulatory landscapes and ensure compliance with
            applicable data protection standards across jurisdictions.
          </p>

          <h3 style={heading3Style}>Updates to This Policy</h3>
          <p style={paragraphStyle}>
            We may update this Privacy Policy periodically to reflect legal,
            regulatory, or operational changes. We encourage visitors to
            review this page regularly.
          </p>

          <h3 style={heading3Style}>Contact Us</h3>
          <p style={paragraphStyle}>
            If you have any questions regarding this Privacy Policy or how we
            handle your information, please contact us through the details
            provided on our website.
          </p>
        </div>
      </SectionContainer>
    </>
  );
};

export default PrivacyPolicy;