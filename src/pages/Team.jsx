import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ImgHero from "../imgs/heroImgs/TeamHero.jpeg";
import HeroImg from "../Materials/Hero/HeroImg";
import Img from "../imgs/team/att-1.webp";

const teamMembers = [
  {
    id: "Sonal-Kumar-Singh",
    name: "Sonal-Kumar-Singh",
    role: "Managing Partner",
    image: Img,
    email: "aya@example.com",
    phone: "+123456789",
    linkedin: "https://linkedin.com/in/aya",
  },
  {
    id: "Faizur-Rehman",
    name: "Faizur Rehman",
    role: "Partner",
    image: Img,
    email: "john@example.com",
    phone: "+987654321",
    linkedin: "https://linkedin.com/in/john",
  },
  {
    id: "Ayan-K-De",
    name: "Ayan K. De",
    role: "partner",
    image:Img,
    email: "sara@example.com",
    phone: "+112233445",
    linkedin: "https://linkedin.com/in/sara",
  },
  {
    id: "Ratik",
    name: "Ratik",
    role: "Associate Partner",
    image:Img,
    email: "sara@example.com",
    phone: "+112233445",
    linkedin: "https://linkedin.com/in/sara",
  },

  {
    id: "Sukanya-Lal",
    name: "Sukanya Lal",
    role: "Associate Partner",
    image:Img,
    email: "sara@example.com",
    phone: "+112233445",
    linkedin: "https://linkedin.com/in/sara",
  },

  {
    id: "Suraj-Raj-Kesherwani",
    name: "Suraj Raj Kesherwani",
    role: "Associate Partner",
    image:Img,
    email: "sara@example.com",
    phone: "+112233445",
    linkedin: "https://linkedin.com/in/sara",
  },

   {
    id: "Ekansh-Gupta",
    name: "Ekansh Gupta",
    role: "Head – Tax and Accounts",
    image:Img,
    email: "sara@example.com",
    phone: "+112233445",
    linkedin: "https://linkedin.com/in/sara",
  
  },
    {
    id: "Faizur Rehman",
    name: "Faizur-Rehman",
    role: "Partner",
    image: Img,
    email: "john@example.com",
    phone: "+987654321",
    linkedin: "https://linkedin.com/in/john",
  },
];

export default function Team() {
  return (
    <>
    
<HeroImg image={ImgHero}>Meet Our Team</HeroImg>
    <div className="team-container">
   
      <div className="team-grid">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            to={`/${member.id}`}
            state={member}
            className="team-card-link"
          >
            <div className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h2 className="team-name">{member.name}</h2>
              <p className="team-role">{member.role}</p>

              {/* <div className="team-icons">
                <a
                  href={`mailto:${member.email}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={`tel:${member.phone}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
