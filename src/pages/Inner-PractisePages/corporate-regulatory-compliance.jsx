import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const CorporateRegulatoryCompliance = () => {
  return (
    <ServicePage
      title="Corporate & Regulatory Compliance"
      heroImage={Img}
      paragraphs={[
        "Over the years, the Firm has developed a niche through its expert team to advise unlisted multinational companies on various matters of corporate governance, foreign exchange laws, regulatory and corporate compliances.",
        "Our dedicated team brings years of industry experience and legal expertise, helping clients navigate complex regulatory and governance matters in a cost-effective and timely manner."
      ]}
      accordions={[
        {
          title: "Our Expertise Includes",
          content: `
• Corporate compliance under the Companies Act, 2013  
• Regulatory compliance under FEMA, 1999 and RBI guidelines  
• Statutory compliance under labour and employment laws such as:  
  - Employees’ Provident Fund and Miscellaneous Provisions Act, 1952  
  - Employees’ State Insurance Act, 1948  
  - Factories Act, 1948  
  - State-specific Shops and Establishments Acts  
• Transaction-based compliance advisory with timelines  
• End-to-end monitoring of compliance cycles  
• Risk mitigation and corporate governance strategy  
• Advisory on filings and avoiding penalties for non-compliance  
          `
        }
      ]}
    />
  );
};

export default CorporateRegulatoryCompliance;
