import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const DebtFunding = () => {
  return (
    <ServicePage
      title="Debt Funding"
      heroImage={Img}
      paragraphs={[
        "We also advise on undertaking inbound debt funding. Recently, the Reserve Bank of India revamped and simplified the master directions regulating external commercial borrowing. The Budget 2020 also increased the FPI investment limit into corporate bonds from the current 9% to 15%. The liberalization of regulations has increased the popularity of foreign debt funding in India.",
        "The advent of hybrid instruments has also boosted the rise of debt investment. Our advisory helps in identifying the most appropriate instrument to invest in while undertaking a debt investment. Our advisory helps in identifying the most appropriate instrument to invest in while undertaking debt funding in India. Our advice is driven by the nature of the sector in which the investment is proposed, tax considerations and the foreign exchange framework."
      ]}
      accordions={[]} // No accordions currently specified
    />
  );
};

export default DebtFunding;
