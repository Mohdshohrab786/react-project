import React from "react";
import img1 from "../imgs/heroImgs/notabledeals2.png";
import img2 from "../imgs/carousel/img-2.jpg";
import img3 from "../imgs/carousel/img-1.jpg";
import HeroImg from "../Materials/Hero/HeroImg";
import SectionContainer from "../Materials/Section/Section";
import "./NotableDeals.css";

const cards = [
  {
    id: 1,
    title: "Beautiful Design",
    description: "Elegant and minimal design using your brand colors.",
    img: img1,
  },
  {
    id: 2,
    title: "Fast Performance",
    description: "Optimized and responsive layout with flexbox.",
    img: img2,
  },
  {
    id: 3,
    title: "Modern Look",
    description: "Simple hover animations for a professional feel.",
    img: img3,
  },
  {
    id: 4,
    title: "Beautiful Design",
    description: "Elegant and minimal design using your brand colors.",
    img: img1,
  },
  {
    id: 5,
    title: "Fast Performance",
    description: "Optimized and responsive layout with flexbox.",
    img: img2,
  },
  {
    id: 6,
    title: "Modern Look",
    description: "Simple hover animations for a professional feel.",
    img: img3,
  },

  {
    id: 7,
    title: "Beautiful Design",
    description: "Elegant and minimal design using your brand colors.",
    img: img1,
  },
  {
    id: 8,
    title: "Fast Performance",
    description: "Optimized and responsive layout with flexbox.",
    img: img2,
  },
  {
    id: 9,
    title: "Modern Look",
    description: "Simple hover animations for a professional feel.",
    img: img3,
  },
];

export default function FlexCards() {
  return (
    <>
      <HeroImg image={img1}> Notable Deals</HeroImg>
      <SectionContainer urclasses="notable-deals-intro">
        <div className="container">
          <div className="cards-container">
            {cards.map((card, index) => (
              <div className="card" key={card.id}>
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-content">
                  <h2
                    className="card-title"
                    style={{ color: index % 2 === 0 ? "#07565c" : "#9fb03a" }}
                  >
                    {card.title}
                  </h2>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
