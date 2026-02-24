// src/components/Topbar.jsx
import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar px-4 py-2 d-flex justify-content-between align-items-center flex-wrap">
      <div className="topbar-left">
        <span className="address">
          <i className="fas fa-map-marker-alt me-1"></i>
          Plot-56, Jasola Vihar, New Delhi
        </span>
      </div>
      <div className="topbar-right d-flex gap-4">
        <span className="phone">
          <i className="fas fa-phone me-1"></i>
          +91-98100 45028
        </span>
        <span className="email">
          <i className="fas fa-envelope me-1"></i>
          info@akspartners.in
        </span>
      </div>
    </div>
  );
};

export default Topbar;
