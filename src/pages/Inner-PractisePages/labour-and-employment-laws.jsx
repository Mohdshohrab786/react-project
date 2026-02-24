import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const LabourAndEmploymentLaws = () => {
  return (
    <ServicePage
      title="Labour and Employment Laws"
      heroImage={Img}
      paragraphs={[
        "AKS Partners has represented some of India's leading private and public sector companies before Tribunals, Commissions and other Quasi-Judicial and Judicial bodies in matters connected with employment and industrial disputes.",
        "Some of the services provided by the Firm include handling of compliance and regulatory issues, employment aspects of business transfer, employment contracts, disciplinary and grievance matters, handbooks and compensation packages and claims of wrongful and unfair dismissal and redundancy.",
        "Recently, the Firm was engaged by a national level government organization to handle key service matters before High Court and Central Administrative Tribunal. It has also advised a leading public research university in London with regard to employment contracts covering its staff in India."
      ]}
      accordions={[]} // Add accordion items later if needed
    />
  );
};

export default LabourAndEmploymentLaws;
