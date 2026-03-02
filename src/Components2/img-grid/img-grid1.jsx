// src/components/ImageGrid.js
import React from "react";
import "./img-grid.css";
import Img1 from "../../imgs/carousel/Home page about us1.png";
import Img2 from "../../imgs/carousel/Home page about us2.png";
import Img3 from "../../imgs/carousel/Home page about us3.png";

const ImageGrid1 = () => {
  return (
    <section className="aks-image-grid">
      <div className="left-grid">
        <div className="grid-item">
          <img src={Img1} alt="Top Left" />
        </div>
        <div className="grid-item">
          <img src={Img2} alt="Bottom Left" />
        </div>
      </div>
      <div className="right-grid">
        <div className="grid-item tall">
          <img src={Img3} alt="Right Side" />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid1;
