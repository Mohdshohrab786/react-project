import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const ITITES = () => {
  return (
    <ServicePage
      title="IT/ITES"
      heroImage={Img}
      paragraphs={[
        "The Firm assists and advises multinational IT/ITES, e-commerce and other technology service provider companies in a wide range of complex technology matters.",
        "Our experienced team understands the unique and ever-changing legal challenges in the information technology industry and hence commits to offer tailor-made solutions based on the needs of each client. More specifically, the Firm provides the following services including but not limited to:",
        "• Drafting and reviewing of technology related agreements such as SaaS agreements, technology transfer agreements, service agreements, software development agreements, click wrap agreements, cloud/server sharing agreements, cloud computing agreements, outsourcing agreements, and maintenance and hosting agreements;",
        "• Advising fintech companies and regulated entities on structuring financial and credit products, buy now pay later products, POS lending, digital wallet and digital lending in general;",
        "• Advising on various issues that an IT company may face and need to comply with under the Information Technology Act, 2000; and",
        "• Advising companies on their websites' terms of use, privacy policy and various other policies as may be required under the applicable laws.",
      ]}
    />
  );
};

export default ITITES;
