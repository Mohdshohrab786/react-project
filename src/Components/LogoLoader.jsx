import React, { useEffect, useState } from "react";
import "./LogoLoader.css";

const LogoLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4500); // Hide after 4.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="logo-loader">
      <h1 className="logo-text">
        <span className="a-letter">a</span>
        <span className="k-letter">k</span>
        <span className="s-letter">s</span>
        <span className="rest">partners</span>
      </h1>
      <p className="logo-subtext">Advocates, Solicitors, Consultants</p>
    </div>
  );
};

export default LogoLoader;
