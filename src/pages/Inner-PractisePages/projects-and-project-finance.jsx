import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const ProjectAndFinance = () => {
  return (
    <ServicePage
      title="Project and Project Finance"
      heroImage={Img}
      paragraphs={[
        "The Firm's Project and Project Finance practice has enabled businesses, particularly public sector companies, to develop procurement strategies, create appropriate finance structures, and design private investment solicitation processes. It has ensured that risks are dealt with effectively and efficiently and that the projects have achieved their funding objectives.",
        "The Firm's Project Finance advice has covered various power projects from both a Lender's and Borrower's perspective and with its all-encompassing approach to Projects it has helped identify and tackle potential risks, leading to successful project financing results.",
        "The firm's expertise in this area ranges from being a legal adviser to financiers of projects and the preparation and negotiation of financing documentation, inter creditor arrangements and trust and retention documents to the carrying out of due diligence on project contracts and the preparation and negotiation of project documentation.",
      ]}
      accordions={[
        {
          title: "Procurement & Finance Structuring",
          content:
            "We assist businesses in developing procurement strategies and creating appropriate finance structures tailored to specific project needs.",
        },
        {
          title: "Private Investment Solicitation",
          content:
            "Advising public sector companies on the legal design of investment solicitation processes to attract private participation.",
        },
        {
          title: "Risk Management in Projects",
          content:
            "Strategic identification and mitigation of risks in project lifecycles to ensure successful project execution and funding.",
        },
        {
          title: "Lender & Borrower Perspective Advisory",
          content:
            "Comprehensive project finance advice covering perspectives of both lenders and borrowers, particularly in the power and infrastructure sectors.",
        },
        {
          title: "Documentation & Due Diligence",
          content:
            "Drafting and negotiating financing documentation, inter-creditor agreements, trust and retention arrangements, and performing due diligence on project contracts.",
        },
      ]}
    />
  );
};

export default ProjectAndFinance;
