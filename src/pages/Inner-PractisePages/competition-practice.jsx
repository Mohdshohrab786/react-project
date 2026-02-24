import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const CompetitionPractice = () => {
  return (
    <ServicePage
      title="Competition Practice"
      heroImage={Img}
      paragraphs={[
        "Our firm offers comprehensive advice and guidance on a wide range of antitrust and competition law matters. We assist clients in navigating the complex framework of the Competition Act, 2002 and related regulations enforced by the Competition Commission of India (CCI).",
        "Our services are tailored to mitigate risk and ensure regulatory compliance in mergers, acquisitions, and strategic collaborations."
      ]}
      accordions={[
        {
          title: "Our Expertise Includes",
          content: `
• Filing advisory for combinations, mergers, and acquisitions  
• Advising on anti-competitive agreements and cartel-related matters  
• Legal strategy on abuse of dominant position cases  
• Preparing green channel filings and fast-track clearances  
• Representing clients before the Competition Commission of India (CCI)  
• Conducting internal audits and compliance training  
• Preventive compliance frameworks and risk assessments  
          `,
        },
      ]}
    />
  );
};

export default CompetitionPractice;
