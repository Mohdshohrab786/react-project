import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const IntellectualPropertyLaw = () => {
  return (
    <ServicePage
      title="Intellectual Property and Cyber Law"
      heroImage={Img}
      paragraphs={[
        "The team at AKS Partners provides a complete range of Intellectual Property services given its familiarity with a diverse range of industry sectors. The Firm's services encompass advice on the protection of Trade/Service marks, Patents, Copyright and Designs.",
        "The team after conducting trade mark clearance searches has advised clients on the selection, availability, use and Registration of trade/service marks within India and abroad as well as the Protection of software and Trade secrets, Confidential information etc. We also assist our clients in ascertaining and drafting correct specification of goods and services for their business areas in order to attain maximum protection.",
        "The IP team comprises of lawyers with extensive experience in IP litigation and drafting of variety of License and Merchandising Agreement. The Firm has robust experience in disputes involving IP in national and regional courts in matters of validity, ownership, infringement, rights of use and has dexterously pursued and defended IP disputes related to counterfeiting cases. The Firm has represented the foremost national and international brands on IPR issues related to identification and development, transactions, procurement, litigation and enforcement.",
        "AKS Partners are considered pioneers in the practice of Cyber Law and the team in this department works seamlessly with the Intellectual Property group in advising its clients on the issues around the availability, application, registration, selection and use of domain names, trade/service marks, copyrights and patents in India and abroad. The cyber law team has represented clients before arbitrators and courts in India with regard to domain name disputes. It has worked with the National Internet Exchange of India in drafting its sunrise policies and the rules framed thereunder. The Firm's Managing Partner has been a Senior Legal Advisor to NIXI and a member of the Expert Committee that was appointed by the Government of India in 2005 to consider amendments to the Information Technology Act.",
      ]}
      accordions={[
        {
          title: "Intellectual Property Audits and Due Diligence",
          content:
            "Includes carrying out audits for clients to look into the existing documentation of the clients; suggest strategies to cover up the unprotected intellectual properties of the client, etc.",
        },
        {
          title: "Search and Analysis",
          content:
            "Search and analysis of availability of prospective trade mark, copyright, design in market.",
        },
        {
          title: "Drafting, Filing, and Prosecution",
          content:
            "Drafting, Filing and other Prosecution work for registering trade/service mark, copyright, designs etc.",
        },
        {
          title: "Opposition and Cancellation Actions",
          content:
            "Handling of Opposition and Cancellation Actions before Trade Marks Registry and Intellectual Property Appellate Board.",
        },
        {
          title: "International IP Protection",
          content:
            "Registering and Protecting Intellectual Property Overseas including filings and enforcement.",
        },
        {
          title: "IP Enforcement and Litigation",
          content:
            "Litigation before courts in India for trade mark infringement, trade dress violations, passing off, and copyright infringement.",
        },
        {
          title: "Sector-Specific Strategic IP Advice",
          content:
            "Strategic advice to companies in sectors like Manufacturing, Financial services, Automobiles and Engineering based on the firm’s industry familiarity and technical expertise.",
        },
      ]}
    />
  );
};

export default IntellectualPropertyLaw;
