import React from "react";
import TeamDetail from "./TeamDetail";
import sonalImg from "../imgs/team/att-1.webp"; // replace with actual image

const TeamDetail1 = () => {
  return (
    <TeamDetail
      name="Sonal Kumar Singh"
      position="Managing Partner"
      email="sksingh@akspartners.in"
      image={sonalImg}
      phone={"91123456789"}
      linkedIn={"https://www.linkedin.com/"}
      sections={[
        {
          title: "Educational Qualification",
          content: [
            "Bachelor of Commerce, Delhi University",
            "Bachelor of Laws, CCS University, Meerut",
            "Master in Laws (Commercial & Corporate Laws), Kings College London, University of London",
            "Post Graduate Diploma in Cyber Law, Indian Law Institute",
            "Solicitor, England and Wales (N.P.)",
          ],
        },
        {
          title: "Experience",
          content: [
            "Sonal spearheads the dispute resolution team of the Firm...",
            "He has written extensively on the subject of International Arbitration...",
            "He has delivered guest lectures and spoken at international conferences...",
          ],
        },
        {
          title: "Positions Held",
          content: [
            "Committee Member, Indian Arbitration Group, ICC",
            "Member, User`s Council, SIAC",
            "Executive Member, Indian Arbitration Forum",
            "Regional Representative, ICC Young Arbitrators Forum (Asia)",
          ],
        },
        {
          title: "Publications",
          content: [
            "Allocation of Cost in International Arbitration – OUP",
            "Research contribution to 'Damages in International Investment Arbitration' – BIICL",
            "Law in Service of People – APJA Journal",
          ],
        },
      ]}
    />
  );
};

export default TeamDetail1;
