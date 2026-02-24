import React from "react";
import { Link } from "react-router-dom";
import Img2 from "../imgs/heroImgs/career.png";
import Img from "../imgs/carousel/img-3.jpg";
import "./Careers.css";
import HeroImg from "../Materials/Hero/HeroImg";

function CareerPage() {
  const roles = [
    { id: 1, title: "Engineer", description: "Join our engineering team", img: Img, color: "#07565c" },
    { id: 2, title: "Corporate Counsel", description: "Join our corporate team", img: Img, color: "#0093a1" },
    { id: 3, title: "Intern", description: "Apply as a legal intern", img: Img, color: "#9fb03a" },
  ];

  return (
    <>
    <HeroImg image={Img2}>Join our Team!</HeroImg>
    <div className="careers-container">
     
      <div className="cards">
        {roles.map((role) => (
          <Link to={`/apply/${role.title}`} className="card-link" key={role.id}>
            <div className="card" style={{ borderTop: `6px solid ${role.color}` }}>
              <img src={role.img} alt={role.title} className="card-image" />
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default CareerPage;
