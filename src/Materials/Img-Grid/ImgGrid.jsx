import React, { useState } from "react";
import Slider from "react-slick";
import "./ImageGrid.css";

const images = [
  "../../imgs/carousel/img-1.jpg",
  "../../imgs/carousel/img-2.jpg",
  "../../imgs/carousel/img-3.jpg",
];

const ImageGridWithCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const settings = {
    initialSlide: startIndex,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div>
      {/* Grid of images */}
      <div className="image-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index}`}
            onClick={() => {
              setStartIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Fullscreen carousel overlay */}
      {isOpen && (
        <div className="carousel-overlay">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✖
          </button>
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i}>
                <img src={src} alt={`Slide ${i}`} className="carousel-img" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ImageGridWithCarousel;
