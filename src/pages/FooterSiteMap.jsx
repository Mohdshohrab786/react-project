import React from "react";
import "./FooterSiteMap.css";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <h1 className="sitemap-title">Sitemap</h1>

      {/* About the Firm */}
      <div className="sitemap-section">
        <h2>
          <Link to="/about">About the Firm</Link>
        </h2>
        <div className="underline"></div>
      </div>

      {/* Practice Areas */}
      <div className="sitemap-section">
        <h2>
          <Link to="/practice-areas">Practice Areas</Link>
        </h2>
        <div className="underline"></div>

   <ul className="expertise-list">
  <li><Link to="/litigation">Litigation</Link></li>
  <li><Link to="/arbitration">Arbitration</Link></li>
  <li><Link to="/general-corporate-and-commercial">General Corporate and Commercial</Link></li>
  <li><Link to="/private-equity-and-venture-capital">Private Equity and Venture Capital</Link></li>
  <li><Link to="/start-ups-consultancy">Start-Ups Consultancy</Link></li>
  <li><Link to="/debt-funding">Debt Funding</Link></li>
  <li><Link to="/contract-management">Contract Management</Link></li>
  <li><Link to="/labour-and-employment-laws">Labour and Employment Laws</Link></li>
  <li><Link to="/intellectual-property-low-and-cyber-low">Intellectual Property Laws</Link></li>
  <li><Link to="/projects-and-project-finance">Project Financing</Link></li>
  <li><Link to="/legal-metrology">Legal Metrology</Link></li>
  <li><Link to="/software-agreement-related-advisory">Software Agreement & Related Advisory</Link></li>
  <li><Link to="/it-ites">IT/ITES</Link></li>
  <li><Link to="/mergers-and-acquisitions">Mergers and Acquisitions</Link></li>
  <li><Link to="/secretarial-compliance">Secretarial Compliance</Link></li>
  <li><Link to="/competition-practice">Competition Practice</Link></li>
  <li><Link to="/corporate-regulatory-compliance">Corporate & Regulatory Compliance</Link></li>
  <li><Link to="/#">Infrastructure and Energy</Link></li>
</ul>

      </div>

      {/* Team */}
      <div className="sitemap-section">
        <h2>
          <Link to="/team">Our Team</Link>
        </h2>
        <div className="underline"></div>
      </div>

      {/* Notable Deals */}
      <div className="sitemap-section">
        <h2>
          <Link to="NotableDeals">Notable Deals</Link>
        </h2>
        <div className="underline"></div>
      </div>

      {/* Thought Leadership */}
      <div className="sitemap-section">
        <h2>
          <Link to="NotableDeals">Thought Leadership</Link>
        </h2>
        <div className="underline"></div>
      </div>

      {/* Awards */}
      <div className="sitemap-section">
        <h2>
          <Link to="/awards">Awards & Recognition</Link>
        </h2>
        <div className="underline"></div>
      </div>

      {/* Contact */}
      <div className="sitemap-section">
        <h2>
          <Link to="/contact">Contact</Link>
        </h2>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default Sitemap;


// import React from "react";
// import "./FooterSiteMap.css";
// import { Link } from "react-router-dom";

// const Sitemap = () => {
//   return (
//     <div className="sitemap-container">
//       <h1 className="sitemap-title">Sitemap</h1>

//       {/* About the Firm */}
//       <div className="sitemap-section">
//         <h2>About the Firm</h2>
//         <div className="underline"></div>
      
//       </div>

//       {/* Practice Areas */}
//       <div className="sitemap-section">
//         <h2>Practice Areas</h2>
//         <div className="underline"></div>
//         <ul  className="expertise-list">
//         <li>Litigation</li>
// <li>Arbitration</li>
// <li>General Corporate and Commercial</li>
// <li>Private Equity and Venture Capital</li>
// <li>Start-Ups Consultancy</li>
// <li>Debt Funding</li>
// <li>Contract Management</li>
// <li>Labour and Employment Laws</li>
// <li>Intellectual Property Laws</li>
// <li>Project Financing</li>
// <li>Legal Metrology</li>
// <li>Software Agreement & Related Advisory</li>
// <li>IT/ITES</li>
// <li>Mergers and Acquisitions</li>
// <li>Secretarial Compliance</li>
// <li>Competition Practice</li>
// <li>Corporate & Regulatory Compliance</li>
// <li>Infrastructure and Energy</li>

//         </ul>
//       </div>

//       {/* Team */}
//       <div className="sitemap-section">
//         <h2>Our Team</h2>
//         <div className="underline"></div>
    
//       </div>

//          <div className="sitemap-section">
//         <h2>Notable Deals</h2>
//         <div className="underline"></div>
//       </div>


//          <div className="sitemap-section">
//         <h2>Thought Leadership</h2>
//         <div className="underline"></div>
//       </div>

//       {/* Awards */}
//       <div className="sitemap-section">
//         <h2>Awards & Recognition</h2>
//         <div className="underline"></div>
//       </div>

//       {/* Contact */}
//       <div className="sitemap-section">
//         <h2>Contact</h2>
//         <div className="underline"></div>
//       </div>
//     </div>
//   );
// };

// export default Sitemap;
