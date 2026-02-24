import React from "react";
import TeamDetail from "./TeamDetail";
import sonalImg from "../imgs/team/att-1.webp"; // using same image path

const TeamDetail7 = () => {
  return (
    <TeamDetail
      name="Sukanya Lal"
      position="Associate Partner"
      email="sukanya@akspartners.in"
      image={sonalImg}
      sections={[
        {
          title: "Educational Qualification",
          content: ["Faculty of Law, University of Allahabad"],
        },
        {
          title: "Experience",
          content: [
            "Sukanya is an accomplished lawyer specialising in international arbitration, with over a decade of experience representing clients before leading arbitral institutions including SIAC, ICC, and LCIA. A graduate of the Faculty of Law, University of Allahabad (B.A. LL.B., 2015), she also frequently appears before the Supreme Court of India and the Delhi High Court.",
            "She is enrolled as an Advocate-on-Record of the Supreme Court of India — a distinction conferred upon a select group of practitioners with the exclusive right to file and conduct matters before the Court. In this capacity, she has successfully secured both interim and final reliefs for clients in complex disputes.",
            "Her practice spans both international and domestic arbitrations, with a particular focus on the infrastructure and construction sector. She regularly advises and represents clients in high-stakes disputes involving delays, cost escalations, variations, force majeure, and breaches of contractual obligations. Over the years, she has acted for prominent entities across diverse sectors, including telecommunications, railways, and road construction. Among her notable clients are Oriental Structural Engineers Pvt. Ltd., IRCON, Dedicated Freight Corridor Corporation of India Limited, Airports Authority of India, Feedback Infra Pvt. Ltd., and National Textile Corporation.",
            "She is deeply committed to assisting clients in navigating complex commercial and contractual challenges, ensuring that disputes are approached strategically and resolved with efficiency.",
            "Prior to joining the Firm in 2021, Sukanya worked with leading law firms such as AP & Partners and LexCounsel in New Delhi, where she gained extensive experience across a broad spectrum of commercial disputes and arbitration matters.",
          ],
        },
        {
          title: "Professional Qualifications",
          content: [
            "Admitted to the Bar Council of Delhi, 2016",
            "Advocate on Record, Supreme Court of India in 2024",
          ],
        },
      ]}
    />
  );
};

export default TeamDetail7;
