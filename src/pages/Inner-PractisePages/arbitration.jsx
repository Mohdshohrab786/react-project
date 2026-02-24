import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg"; // Replace with actual arbitration image if available

const Arbitration = () => {
  return (
    <ServicePage
      title="Arbitration"
      heroImage={Img}
      paragraphs={[
        "The clients of AKS Partners have benefited considerably from its team's deep knowledge and expertise in the area of Alternate Dispute Resolution. A significant share of the Firm's practice involves counseling and advocacy outside the courtroom while ensuring the most commercially viable results for its clients.",
        "Over the years of practice, AKS Partners has successfully managed to develop and maintain its clientele including national and international clients such as major corporates, banks, financial institutions, private equity houses, investors, high-net-worth individuals, brand owners. The Firm has handled and continues to handle some of the biggest claims and has also successfully represented various clients in domestic and International arbitrations around the world.",
      ]}
      accordions={[
        {
          title: "International Arbitrations",
          content: `The Firm has successfully handled Arbitrations, Mediations and Negotiations on behalf of its clients and is fully equipped to provide its expertise in matters relating to international arbitrations that invoke the application of the Indian Arbitration and Conciliation Act 1996, LCIA rules, ICC rules, IBA rules, UNCITRAL Model Law, ICSID rules, AAA/ICDR, DIAC, and SIAC. In particular, the Firm has been engaged in matters involving disputes including but not limited to:

- Construction and Infrastructure Disputes
- Sale of Goods disputes
- Real estate/ Property disputes
- Disputes arising out of Technology and Service Contracts
- Joint venture disputes
- Financial and Investment disputes`,
        },
        {
          title: "Domestic Arbitrations",
          content: `The Firm's arbitration practice for domestic clients has covered among others, Breach of Contract, Interference with Contract, Design and Construction Defects, Deceptive Trade Practices, Conspiracy and Fraudulent Inducement. It has filed petitions for appointment of Arbitrators, interim relief, execution and the enforcement of awards before appropriate forums. The Firm's members are also actively involved with various Arbitration Councils.`,
        },
        {
          title: "Domain Name Disputes",
          content: `The Firm's members are considered pioneers in the practice of Cyber Law and/or domain name disputes and the team in this department works seamlessly with the Intellectual Property group in advising its clients on the issues around the availability, selection and use of domain names, in India and abroad. The team has represented clients before arbitrators, WIPO/NIXI and courts in India with regard to domain name disputes. It has worked with the National Internet Exchange of India in drafting its sunrise policies and the rules framed thereunder. The Firm's Senior Partners are also empanelled arbitrators in NIXI.`,
        },
      ]}
    />
  );
};

export default Arbitration;
