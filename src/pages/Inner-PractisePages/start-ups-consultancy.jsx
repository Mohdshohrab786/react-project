import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const StartUpsConsultancy = () => {
  return (
    <ServicePage
      title="Start-Ups Consultancy"
      heroImage={Img}
      paragraphs={[
        "With the onset of the start-up culture in India, boosting innovation at its finest, it becomes essential to cater to the legal needs and demands of such an ecosystem, wherein, the legal and corporate compliances and checklists do not become a hindrance to the core competency of any entrepreneur. Our firm has established its presence in this booming industry by advising not only start-ups but also incubators and venture capitalists. We aim to provide finest legal services for start-ups with our experienced team, who understands setting up a new business is full of challenges, including but not limited to, generating and nurturing a business idea, understanding market conditions and customer demands, arranging funding, building the right team and many more. While entrepreneurs need to focus on these key factors, setting up legally complied businesses are vital for smooth operations and sustainable businesses. Investors have special regard and give value for businesses with good ‘Corporate Governance’ and legally complied businesses.",
        "Our work starts with tailor making the right product to fit different start-ups. The product comprises start up advisory, curated term sheets and the funding agreement(s) (i.e., seed funding, bridge round, Series A, Series B, etc.) with associated risk analysis and liabilities check. Our team handholds the start-up and aids in its growth by giving precise legal advice on, inter-alia, formation of legal entity best suited for your business as it grows, drafting, negotiating and finalizing funding documents, confidentiality agreements, partnership/joint venture agreements, employment agreement, service agreements along with HR and regulatory compliances, setting up ‘Board and Governance Model’ and handling IPR."
      ]}
      accordions={[]} // No accordions specified for now
    />
  );
};

export default StartUpsConsultancy;
