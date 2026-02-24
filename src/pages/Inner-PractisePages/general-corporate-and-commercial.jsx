import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg"; // Replace with a relevant image if you have one

const GeneralCorporateAndCommercial = () => {
  return (
    <ServicePage
      title="General Corporate and Commercial"
      heroImage={Img}
      paragraphs={[
        "Our team strives towards building a strong professional relationship with in-house legal teams to provide reliable and efficient advice.",
        "Seasoned attorneys of the Firm support in drafting, reviewing and negotiating several types of intricate commercial contracts/agreements including but not limited to request for proposal (RFP), master services agreement (MSA), statement of work, LEAs, work order, memorandum of understanding, letter of intent, consulting/employment agreement, lease agreement, leave & license agreement, framework agreement, non-compete & non-solicit agreement, partnership agreement, confidentiality/non-disclosure agreement, etc., for several industries like: IT/ITES, BFSI, Outsourcing (BPO, LPO), Telecom, Infra, Healthcare, E-Commerce and Energy & Power. The outsourcing support also includes contracts for AI, RPA support, reseller agreement and ML contracts.",
        "The Firm has a specialized team to support outsourcing clients in relation to their contracting and commercial domain which involves partnering with them to review, author, negotiate and close deals both domestic and internationally for and including complex contracts which include multi-jurisdictional legal knowledge of FCPA, HIPPA, PCIDSS, TUPA, Anti Money Laundering, IPCR, Infosec, Data Privacy, etc. requirements. The Firm not only supports the legal part of the contract but also partners with the client to support the operational and commercial aspects which has a keen say on the legalities of the deal.",
        "The Firm has a vast experience of managing multiple clients and third parties across various industries/verticals (such as Telecom, Technology, Manufacturing, Travel, e-Commerce, Insurance, Mortgage, Retail, BFSI, Healthcare, Financial Research, Consumer, Government etc.) during both pre-negotiation and post-execution.",
        "Our expertise in this field enables us to provide a holistic approach towards advising on commercial transactions including but not limited to complex contractual arrangements, licensing and development arrangements, manufacturing and supply agreements.",
      ]}
    />
  );
};

export default GeneralCorporateAndCommercial;
