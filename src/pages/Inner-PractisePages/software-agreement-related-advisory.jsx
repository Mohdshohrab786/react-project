import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const SoftwareAgreement = () => {
  return (
    <ServicePage
      title="Software Agreement & Related Advisory"
      heroImage={Img}
      paragraphs={[
        "The Firm assists in providing comprehensive legal solutions tailored to meet the unique needs of businesses navigating the dynamic landscape of technology licensing.",
        "Our team possesses extensive experience in structuring and negotiating software licensing agreements, Software as a Service agreements (such as distribution agreements, work for hire agreements etc.), Platform as a Service agreements (PaaS), Infrastructure as a Service agreements (IaaS), cloud storage agreements, master software and service agreement, service level agreements (SLA), software subscription agreement and the entire set of agreements falling within the gamut of an enterprise resource planning solution, ensuring that our clients' interests are safeguarded while promoting strategic business objectives.",
        "Our approach is rooted in a deep understanding of the complexities within this technology sector, ensuring that our clients are not only legally compliant but also strategically positioned for success.",
        "Our expertise further extends to a spectrum of licensing agreements, including the meticulous handling of Original Equipment Manufacturer (OEM) agreements and offering strategic counsel in End User License Agreements (EULA) etc.",
        "We understand the pivotal role licensing agreements play in fostering innovation and driving business growth. With a client-centric approach, we collaborate closely with our clients to craft agreements that align with their interests while also adhering to the industry best practices and legal standards.",
      ]}
    />
  );
};

export default SoftwareAgreement;
