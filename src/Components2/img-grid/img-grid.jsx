import React from "react";
import "./img-grid.css";

const ImageGrid = ({ images = [] }) => {

  // Safety check
  if (!images || images.length < 3) {
    return null; // ya loading message bhi de sakte ho
  }

  return (
    <section className="aks-image-grid">
      <div className="left-grid">
        <div className="grid-item">
          <img src={images[0]} alt="Top Left" />
        </div>
        <div className="grid-item">
          <img src={images[1]} alt="Bottom Left" />
        </div>
      </div>

      <div className="right-grid">
        <div className="grid-item tall">
          <img src={images[2]} alt="Right Side" />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;