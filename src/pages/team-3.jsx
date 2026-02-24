import React from "react";
import TeamDetail from "./TeamDetail";
import sonalImg from "../imgs/team/att-1.webp"; // using same image path

const TeamDetail3 = () => {
  return (
    <TeamDetail
      name="Ayan K. De"
      position="Partner"
      email="ayankumarde@akspartners.in"
      image={sonalImg}
       phone={"91123456789"}
      linkedIn={"https://www.linkedin.com/"}
      sections={[
        {
          title: "Experience",
          content: [
            "Ayan is a Partner, International Arbitration, Disputes and Investigations at AKS Partners. His practice focuses on international commercial and investor-state arbitration, cross-border litigations, commercial litigation and public international law matters. Ayan is qualified to practice in India. He is an alumnus of King’s College London, where he specialised in international disputes and has rich exposure to complex commercial arbitrations, both international and domestic, along with investor-state arbitrations, representing both states and investors alike. That apart, his commercial litigation experience encompasses handling commercial suits to intellectual property laws and company law with a strong hold on advocacy across forums.",
            "The main sectors of his work involve high-value cross-border disputes under major institutions and institutional rules such as ICSID, SCC, LCIA, ICC, PCA and UNCITRAL, across the oil and gas, energy, construction and telecom sectors. He has previously worked in Fox & Mandal, India and thereafter in two renowned international law firms in London- Volterra Fietta and Wilmer Hale in the areas of investor-state, commercial arbitration and public international law.",
            "Ayan regularly teaches and writes on issues of international arbitration, public international law and investment arbitration. In addition, he also serves as the regional contributor for England and Wales for Young ITA. Ayan continues to be a member of the ASIL, Young ICCA, Young LCIA, IBA & Young ITA. He regularly speaks and writes on contemporary issues in international arbitration, dispute resolution and public international law. He also regularly coaches the top law schools of India in various international mooting competitions such as the Vis Moot, Frankfurt Investment Arbitration Moot and the FDI Moot.",
          ],
        },
        {
          title: "Memberships",
          content: [
            "Advocate with the Bar Council of India and the Bar Council of West Bengal, India",
            "Member of The Incorporated Law Society, High Court, Calcutta",
            "Member of Young LCIA",
            "Member of the International Bar Association (IBA)",
            "Member of Young ICCA (International Council for Commercial Arbitration)",
            "Member of the American Society of International Law (ASIL)",
            "Member of Young ITA (Centre for American International Law)",
          ],
        },
        {
          title: "Publication and Speaking Engagements",
          content: [
            "‘In Abeyance-The Suspension of Indus water Treaty and its consequences’, The Statesman, Part I and Part II",
            "Shifting of Institutional rules in the wake of Emergency Arbitration: An uncharted ‘Twilight Zone’ or Nugatory Grey Area? Jus Mundi",
            "Inaugural Lecture on “Navigating institutional rules: unity in diversity or need for harmonisation”, M.K.B Arbitration Centre, NALSAR, Hyderabad",
          ],
        },
      ]}
    />
  );
};

export default TeamDetail3;
