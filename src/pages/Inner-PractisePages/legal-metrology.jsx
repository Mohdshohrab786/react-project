import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const LegalMetrology = () => {
  return (
    <ServicePage
      title="Legal Metrology"
      heroImage={Img}
      paragraphs={[
        "Fulfilment of the requirements under the Legal Metrology Act, 2009 is mandatory. However, the enactment being somewhat complicated, legal expertise is generally considered necessary. This is where the expertise of our dedicated team comes in.",
        "Our experts are well equipped to handle and cater to all your needs and to ensure that all compliances are maintained in an efficient manner.",
      ]}
      accordions={[
        {
          title: "Registration and Licenses",
          content: "Assisting clients in obtaining all necessary registrations and licenses under the Legal Metrology Act, 2009.",
        },
        {
          title: "Audits and Compliance",
          content: "Conducting legal metrology audits and ensuring full compliance with applicable regulatory standards.",
        },
        {
          title: "Consultancy and Training",
          content: "Providing tailored consultancy and training sessions to effectively manage legal metrology compliance obligations.",
        },
        {
          title: "Import License for Legal Metrology",
          content: "Helping clients acquire import licenses and understand the regulatory framework for importing goods under legal metrology laws.",
        },
      ]}
    />
  );
};

export default LegalMetrology;
