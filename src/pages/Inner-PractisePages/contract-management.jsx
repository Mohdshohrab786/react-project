import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const ContractManagement = () => {
  return (
    <ServicePage
      title="Contract Management"
      heroImage={Img}
      paragraphs={[
        "At the Firm, we believe that in order to ensure the smooth, and efficient functioning of an organization, it is important to ensure that all contracts are drafted, phrased, and executed in a proper manner so as to reduce the financial risks associated with a poor contract management system and protect the organization.",
        "Contract management is a key area that requires appropriate skill and expertise in order to ensure that organizations do not run into losses. More often than not, contracts between organizations involve parties from multiple jurisdictions and resultantly, the applicable laws on such contracts might differ.",
        "In such complicated cases, it is essential to obtain proper legal advice from professionals who are skilled in handling such transnational matters. We pride ourselves in having a specialized team of experts skilled in diverse areas to take care of all your contract management needs."
      ]}
      accordions={[]} // Add accordions if needed later
    />
  );
};

export default ContractManagement;
