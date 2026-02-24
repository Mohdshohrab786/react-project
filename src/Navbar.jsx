import React, { useState } from "react";
import "./Navbar.css"; // Move your <style> CSS into this file
import logo from "./imgs/Logo.png"; // Adjust path as needed
import { Link } from "react-router-dom";

const NavbarAKS = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setSubmenuOpen(null);
  };

  const openSubMenu = (menuId) => {
    setSubmenuOpen(menuId);
  };

  const closeSubMenu = () => {
    setSubmenuOpen(null);
  };

  return (
    <>
      <header>
        <div className="brand">
          <Link to="/">
            <a href="#">
              <img src={logo} alt="AKS Partners Logo" />
            </a>
          </Link>
        </div>
        <div
          className={`hamburger ${sidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="desktop-nav">
          <a href="#">Home</a>
          <div className="dropdown">
            <a href="#">
              Services <i className="fas fa-chevron-down chevron-icon"></i>
            </a>
            <div className="dropdown-menu">
              <a href="#">Web Design</a>
              <a href="#">App Development</a>
              <a href="#">Marketing</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">
              About <i className="fas fa-chevron-down chevron-icon"></i>
            </a>
            <div className="dropdown-menu">
              <a href="#">Our Story</a>
              <a href="#">Team</a>
            </div>
          </div>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        aria-hidden={!sidebarOpen}
      >
        <div
          className="nav-item nav-item-drop-side"
          onClick={() => openSubMenu("services")}
        >
          <span>Services</span>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div
          className="nav-item nav-item-drop-side"
          onClick={() => openSubMenu("about")}
        >
          <span>About</span>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="nav-item">Contact</div>

        {/* Submenus */}
        <div
          className={`submenu ${submenuOpen === "services" ? "open" : ""}`}
          aria-hidden={submenuOpen !== "services"}
        >
          <div className="back-arrow" onClick={closeSubMenu}>
            ← Back
          </div>
          <div className="nav-item">Web Design</div>
          <div className="nav-item">App Development</div>
          <div className="nav-item">Marketing</div>
        </div>

        <div
          className={`submenu ${submenuOpen === "about" ? "open" : ""}`}
          aria-hidden={submenuOpen !== "about"}
        >
          <div className="back-arrow" onClick={closeSubMenu}>
            ← Back
          </div>
          <div className="nav-item">Our Story</div>
          <div className="nav-item">Team</div>
        </div>
      </div>

      <div
        id="overlay"
        className={sidebarOpen ? "show" : ""}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default NavbarAKS;
