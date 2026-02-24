import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const Litigation = () => {
  return (
    <ServicePage
      title="Litigation"
      heroImage={Img}
      paragraphs={[
        "Our firm provides comprehensive litigation services covering a wide range of legal areas. We represent clients before various courts and tribunals, ensuring strong advocacy and strategic legal advice. Our litigation team is committed to resolving disputes efficiently while safeguarding our clients’ best interests.",
        "Whether it is commercial disputes, civil litigation, or regulatory challenges, we combine legal expertise with practical business insight to deliver favorable outcomes.",
      ]}
      accordions={[
        {
          title: "Corporate and Commercial Litigation",
          content: `At AKS Partners, we have developed a strong expertise and carved a niche 
for corporate litigation by handling matters related to winding up petitions, 
petitions under mismanagement and oppression, disputes related to Mergers and Acquisitions, 
Revival and Rehabilitation of Sick companies and other issues relating to some of the most 
important legal provisions of Companies Act, Insolvency & Bankruptcy Code, 2016 etc. 
We have successfully represented our clients before BIFR, AAIFR, Company Law Board 
and National Company Law Tribunal.`,
        },
        {
          title: "Banking and Finance Litigation",
          content:
            "Our team advises and represents clients in banking disputes, financial fraud cases, loan defaults, and regulatory challenges.",
        },
        {
          title: "Civil and Criminal Litigation",
          content:
            "We provide legal representation in civil suits and criminal matters, ensuring strong advocacy and effective dispute resolution.",
        },
        {
          title: "Environment Disputes and NGT Litigation",
          content:
            "We represent clients in environment-related disputes before National Green Tribunal (NGT) and other judicial bodies.",
        },
        {
          title: "Consumer Dispute Litigation",
          content:
            "Our lawyers handle disputes before consumer forums, ensuring protection of client interests in consumer rights cases.",
        },
        {
          title: "Insolvency and Bankruptcy Litigation",
          content:
            "We provide advisory and representation under Insolvency & Bankruptcy Code, including creditor and debtor disputes.",
        },
        {
          title: "Indirect Taxation Litigation",
          content:
            "We handle matters related to GST, customs, and other indirect tax disputes before tribunals and courts.",
        },
      ]}
    />
  );
};

export default Litigation;


// import React, { useState } from "react";
// import HeroImg from "../../Materials/Hero/HeroImg";
// import SectionContainer from "../../Materials/Section/Section";
// import "./litigation.css";
// import { Link } from "react-router-dom";
// import Sidebar from "../../Materials/practise/sidenav";
// import SideContent from "../../Materials/practise/sidecontent";
// import Img from "../../imgs/carousel/img-3.jpg";

// const Litigation = () => {
//   const services = [
//     { name: "Litigation", link: "/litigation" },
//     { name: "Arbitration", link: "/arbitration" },
//     {
//       name: "General Corporate and Commercial",
//       link: "/general-corporate-and-commercial",
//     },
//     {
//       name: "Private Equity and Venture Capital",
//       link: "/private-equity-and-venture-capital",
//     },
//     { name: "Start-Ups Consultancy", link: "/start-ups-consultancy" },
//     { name: "Debt Funding", link: "/debt-funding" },
//     { name: "Contract Management", link: "/contract-management" },
//     {
//       name: "Labour and Employment Laws",
//       link: "/labour-and-employment-laws",
//     },
//     {
//       name: "Intellectual Property Laws",
//       link: "/intellectual-property-low-and-cyber-low",
//     },
//     { name: "Project Financing", link: "/projects-and-project-finance" },
//     { name: "Legal Metrology", link: "/legal-metrology" },
//     {
//       name: "Software Agreement & Related Advisory",
//       link: "/software-agreement-related-advisory",
//     },
//     { name: "IT/ITES", link: "/it-ites" },
//     { name: "Mergers and Acquisitions", link: "/mergers-and-acquisitions" },
//     { name: "Secretarial Compliance", link: "/secretarial-compliance" },
//     { name: "Competition Practice", link: "/competition-practice" },
//     {
//       name: "Corporate & Regulatory Compliance",
//       link: "/corporate-regulatory-compliance",
//     },
//     { name: "Infrastructure and Energy", link: "/#" },
//   ];

//   const litigationData = [
//     {
//       title: "Corporate and Commercial Litigation",
//       content: `At AKS Partners, we have developed a strong expertise and carved a niche 
//     for corporate litigation by handling matters related to winding up petitions, 
//     petitions under mismanagement and oppression, disputes related to Mergers and Acquisitions, 
//     Revival and Rehabilitation of Sick companies and other issues relating to some of the most 
//     important legal provisions of Companies Act, Insolvency & Bankruptcy Code, 2016 etc. 
//     We have successfully represented our clients before BIFR, AAIFR, Company Law Board 
//     and National Company Law Tribunal.`,
//     },
//     {
//       title: "Banking and Finance Litigation",
//       content:
//         "Our team advises and represents clients in banking disputes, financial fraud cases, loan defaults, and regulatory challenges.",
//     },
//     {
//       title: "Civil and Criminal Litigation",
//       content:
//         "We provide legal representation in civil suits and criminal matters, ensuring strong advocacy and effective dispute resolution.",
//     },
//     {
//       title: "Environment Disputes and NGT Litigation",
//       content:
//         "We represent clients in environment-related disputes before National Green Tribunal (NGT) and other judicial bodies.",
//     },
//     {
//       title: "Consumer Dispute Litigation",
//       content:
//         "Our lawyers handle disputes before consumer forums, ensuring protection of client interests in consumer rights cases.",
//     },
//     {
//       title: "Insolvency and Bankruptcy Litigation",
//       content:
//         "We provide advisory and representation under Insolvency & Bankruptcy Code, including creditor and debtor disputes.",
//     },
//     {
//       title: "Indirect Taxation Litigation",
//       content:
//         "We handle matters related to GST, customs, and other indirect tax disputes before tribunals and courts.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <>
//       <HeroImg image={Img}>Expertice / Litigation</HeroImg>

//       <div className="services-container">
//         {/* Left Column (Sidebar Nav) */}
        
//             {/* {services.map((service) => (
//               <li
//                 key={service.name}
//                 className={service.name === "Litigation" ? "active" : ""}
//               >
//                 <Link to={service.link}>{service.name}</Link>
//               </li>
//             ))} */}
//             <Sidebar/>
     

//         {/* Right Column (Content) */}
//         {/* <div className="services-content">
//           <h2>Litigation</h2>
//           <p>
//             Our firm provides comprehensive litigation services covering a wide
//             range of legal areas. We represent clients before various courts and
//             tribunals, ensuring strong advocacy and strategic legal advice. Our
//             litigation team is committed to resolving disputes efficiently while
//             safeguarding our clients’ best interests.
//           </p>
//           <p>
//             Whether it is commercial disputes, civil litigation, or regulatory
//             challenges, we combine legal expertise with practical business
//             insight to deliver favorable outcomes.
//           </p>

//           <div className="accordion-container">
//             <h2 className="accordion-heading">Litigation Practice Areas</h2>
//             {litigationData.map((item, index) => (
//               <div className="accordion-item" key={index}>
//                 <button
//                   className={`accordion-title ${
//                     activeIndex === index ? "active" : ""
//                   }`}
//                   onClick={() => toggleAccordion(index)}
//                 >
//                   {item.title}
//                   <span className="accordion-icon">
//                     {activeIndex === index ? "−" : "+"}
//                   </span>
//                 </button>
//                 <div
//                   className={`accordion-content ${
//                     activeIndex === index ? "show" : ""
//                   }`}
//                 >
//                   <p>{item.content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//     <SideContent
//   title="Litigation"
//   paragraphs={[
//     "Our firm provides comprehensive litigation services covering a wide range of legal areas. We represent clients before various courts and tribunals, ensuring strong advocacy and strategic legal advice. Our litigation team is committed to resolving disputes efficiently while safeguarding our clients’ best interests.",
//     "Whether it is commercial disputes, civil litigation, or regulatory challenges, we combine legal expertise with practical business insight to deliver favorable outcomes.",
//   ]}
//   accordions={[
//     {
//       title: "Corporate and Commercial Litigation",
//       content: `At AKS Partners, we have developed a strong expertise and carved a niche 
// for corporate litigation by handling matters related to winding up petitions, 
// petitions under mismanagement and oppression, disputes related to Mergers and Acquisitions, 
// Revival and Rehabilitation of Sick companies and other issues relating to some of the most 
// important legal provisions of Companies Act, Insolvency & Bankruptcy Code, 2016 etc. 
// We have successfully represented our clients before BIFR, AAIFR, Company Law Board 
// and National Company Law Tribunal.`,
//     },
//     {
//       title: "Banking and Finance Litigation",
//       content:
//         "Our team advises and represents clients in banking disputes, financial fraud cases, loan defaults, and regulatory challenges.",
//     },
//     {
//       title: "Civil and Criminal Litigation",
//       content:
//         "We provide legal representation in civil suits and criminal matters, ensuring strong advocacy and effective dispute resolution.",
//     },
//     {
//       title: "Environment Disputes and NGT Litigation",
//       content:
//         "We represent clients in environment-related disputes before National Green Tribunal (NGT) and other judicial bodies.",
//     },
//     {
//       title: "Consumer Dispute Litigation",
//       content:
//         "Our lawyers handle disputes before consumer forums, ensuring protection of client interests in consumer rights cases.",
//     },
//     {
//       title: "Insolvency and Bankruptcy Litigation",
//       content:
//         "We provide advisory and representation under Insolvency & Bankruptcy Code, including creditor and debtor disputes.",
//     },
//     {
//       title: "Indirect Taxation Litigation",
//       content:
//         "We handle matters related to GST, customs, and other indirect tax disputes before tribunals and courts.",
//     },
//   ]}
// />

//       </div>
//     </>
//   );
// };

// export default Litigation;
