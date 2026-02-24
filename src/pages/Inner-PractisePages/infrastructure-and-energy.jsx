import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const InfrastructureAndEnergy = () => {
  return (
    <ServicePage
      title="Infrastructure and Energy"
      heroImage={Img}
      paragraphs={[
        "Over the years, the Firm has developed a niche through its expert team to advise unlisted multinational companies on various matters of corporate governance, foreign exchange laws, regulatory and corporate compliances.",
        "Our dedicated team brings years of industry experience and legal knowledge, offering clients the ability to cost-effectively navigate complex regulatory and corporate governance requirements within the infrastructure and energy sectors."
      ]}
      accordions={[
        {
          title: "Our Compliance Services Cover",
          content: `
• Compliance under the Companies Act, 2013  
• Regulatory advice under the Foreign Exchange Management Act, 1999  
• Labour law compliance including:  
  - Employees' Provident Fund & Miscellaneous Provisions Act, 1952  
  - Employees’ State Insurance Act, 1948  
  - Factories Act, 1948  
  - State-specific Shops and Establishments Acts  
• Advisory on transaction-based compliance requirements  
• Due diligence for project-based compliance tracking  
• Timely alerts and filing support to avoid penalties  
• Legal representation in case of compliance disputes  
          `
        },
        {
          title: "Why It Matters",
          content: `
Non-compliance can lead to heavy penalties and may affect transactions or project timelines. We ensure all compliances are tracked and fulfilled on time, safeguarding the operational and legal interests of infrastructure and energy businesses. Our legal advisory plays a vital role in helping organizations mitigate risk while meeting statutory obligations.
          `
        }
      ]}
    />
  );
};

export default InfrastructureAndEnergy;
