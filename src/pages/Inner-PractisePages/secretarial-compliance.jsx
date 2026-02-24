import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const SecretarialCompliance = () => {
  return (
    <ServicePage
      title="Secretarial Compliance"
      heroImage={Img}
      paragraphs={[
        "The Firm offers a comprehensive one-stop-shop solution for all event-based and regular secretarial compliance services. Our experienced multi-disciplinary team specializes in providing cost-effective secretarial services and solutions tailor-made to cater to the client’s industry sector, enhancing their core productivity.",
        "The Firm also provides specialist support for international transactions through its wide network of professional contacts across the globe."
      ]}
      accordions={[
        {
          title: "Key Secretarial Services",
          content: `
• Incorporation and setting up of companies, LLPs, branch offices in India  
• Assisting in convening board and shareholders’ meetings, including documentation  
• Annual filings and compliances under corporate laws, SEBI, FEMA, etc. (AOC-4, MGT-7A, DPT-3, FLA)  
• Event-based compliances: change of directors, registered office, name, AOA/MOA, share capital  
• Secretarial and compliance audits  
• Maintenance of minutes and statutory registers  
• Government approvals and regulatory coordination  
• Corporate compliance management  
• Business establishment in India by foreign entities and vice versa  
• Corporate law matters and dispute resolution  
• Company secretarial services in corporate laws  
• Sustainability Reporting (BRR) and CSR consultancy  
          `,
        },
        {
          title: "Corporate Affairs",
          content: `
We contribute legal insight to:  
• Foreign collaborations  
• Corporate expansions  
• Business development and operations  
We handle matters involving:  
• Incorporation  
• Joint ventures  
• Foreign collaborations  
• Acquisitions  
• Mergers & amalgamations  
• Winding-up procedures  
          `,
        },
        {
          title: "Secretarial & Compliance Audit",
          content: `
We undertake Secretarial Audits to verify compliance with the Companies Act, 1956 and 2013, as well as allied Acts.  
We issue Compliance Audit Certificates in Form MGT-8 as required under the Companies Act, 2013.  
Audits include:  
• Verifying statutory compliance  
• Reviewing documentation and filings  
• Advising on remedial measures for non-compliance  
          `,
        },
        {
          title: "Company Secretarial Services",
          content: `
• Promotion, formation, and incorporation of companies  
• Filing, attesting, and pre-certifying forms with the Registrar of Companies (ROC)  
• Signing of Annual Returns for listed companies  
• Certifying managerial personnel appointment compliance  
• Issuing compliance status reports  
• Maintenance of statutory records and registers  
• Formation and compliance for Societies, Trusts & Section 8 Companies  
• Conducting legal due diligence for Banks and institutions  
          `,
        },
      ]}
    />
  );
};

export default SecretarialCompliance;
