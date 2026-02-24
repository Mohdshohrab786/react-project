import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import "./HeroCarousel.css";

import img1 from "../imgs/carousel/img-1.jpg";
import img2 from "../imgs/carousel/img-2.jpg";
import img3 from "../imgs/carousel/img-3.jpg";

const slides = [
  {
    image: img1,
    heading: "Expert Legal Advice",
    subheading: "Protecting your rights with confidence",
    button: "Explore Services",
  },
  {
    image: img2,
    heading: "Trusted by Thousands",
    subheading: "Years of experience, countless victories",
    button: "Meet Our Team",
  },
  {
    image: img3,
    heading: "Your Justice is Our Mission",
    subheading: "We fight for what’s right",
    button: "Get Consultation",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel fade touch interval={4000} pause="hover">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img"
            src={slide.image}
            alt={`Slide ${index}`}
          />

          <Carousel.Caption className="carousel-caption-custom">
            <Container>
              <h1 className="animate-text">{slide.heading}</h1>
              <p className="animate-text delay">{slide.subheading}</p>
              <Button
                style={{
                  backgroundColor: "#0093a1",
                  border: "none",
                }}
              >
                {slide.button}
              </Button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
