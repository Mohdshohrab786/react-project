import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const MergersAndAcquisitions = () => {
  return (
    <ServicePage
      title="Mergers and Acquisitions"
      heroImage={Img}
      paragraphs={[
        "We have a strong and fast-growing M&A practice. Undertaking M&A transactions in the legal framework of India continues to be challenging, even after the introduction of several measures by the Central Government towards ease of doing business.",
        "We identify the complexities of such transactions and have built our practice to make the entire process efficient and thorough. Sector-specific knowledge and understanding of the regulatory framework allows us to manage complex transactions with relative ease.",
        "Every client is different and so are its needs. We ensure that our knowledge is utilized in the most optimum way to provide a bespoke service matching those needs. We believe in growing with clients and have developed our practice to ensure that we can assist our clients in every organic and inorganic business life cycle such as:",
        "• Identifying the most optimum vehicle for undertaking a business (e.g., company, limited liability partnership, trust, etc.);",
        "• Assisting at the funding stage (e.g., private equity, venture capital);",
        "• Legal and regulatory compliance;",
        "• Insolvency/dissolution and other exit methods.",
        "Our in-depth understanding of the foreign exchange control laws of India enables us to advise on cross-border M&A including foreign investments and divestments."
      ]}
    />
  );
};

export default MergersAndAcquisitions;
