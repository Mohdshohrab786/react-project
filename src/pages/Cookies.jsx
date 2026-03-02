import React from "react";
import ImgHero from "../imgs/heroImgs/ExpertiseHero.jpeg";
import HeroImg from "../Materials/Hero/HeroImg";
import Heading from "../Materials/Heading2/Heading";
// import Link from "../Materials/Buttons/Button";
import { Link } from "react-router-dom";
import SectionContainer from "../Materials/Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Expertice.css";

const Cookies = () => {
  

  return (
   <>
  <HeroImg image={ImgHero}> Cookie Policy </HeroImg>

  <SectionContainer>
    <div className="container policy-page">
      <h2>Cookie Policy</h2>

      <p>
        This Cookie Policy explains how our Firm uses cookies and similar
        tracking technologies when you visit our website. It describes what
        these technologies are, why we use them, and your rights to control
        their use.
      </p>

      <h3>What Are Cookies?</h3>
      <p>
        Cookies are small text files stored on your device when you access a
        website. They help improve website functionality, enhance user
        experience, and provide analytical insights about website performance.
      </p>

      <h3>Why We Use Cookies</h3>
      <p>
        We use cookies to ensure our website functions efficiently, to enhance
        security, and to better understand how visitors interact with our
        content. This allows us to continuously improve our services and
        digital experience.
      </p>

      <h3>Types of Cookies We Use</h3>

      <ul>
        <li>
          <strong>Essential Cookies:</strong> Required for the proper
          functioning of the website and cannot be disabled.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Help us analyze how users
          interact with our website to improve functionality.
        </li>
        <li>
          <strong>Functional Cookies:</strong> Enable enhanced features and
          personalization.
        </li>
        <li>
          <strong>Security Cookies:</strong> Protect against fraudulent or
          malicious activities.
        </li>
      </ul>

      <h3>Managing Cookies</h3>
      <p>
        You can manage or disable cookies through your browser settings.
        However, please note that disabling certain cookies may impact website
        functionality and user experience.
      </p>

      <h3>Third-Party Cookies</h3>
      <p>
        Some cookies may be placed by third-party service providers for
        analytics and performance tracking. These cookies are governed by the
        respective third-party privacy policies.
      </p>

      <h3>Updates to This Policy</h3>
      <p>
        We may update this Cookie Policy from time to time to reflect changes
        in technology, law, or our business practices. We encourage users to
        review this page periodically.
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have any questions about our use of cookies, please contact us
        through the details provided on our website.
      </p>
    </div>
  </SectionContainer>
</>
  );
};

export default Cookies;
