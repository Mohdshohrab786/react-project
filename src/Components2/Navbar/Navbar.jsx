// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPhoneCall } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import Logo from "../../imgs/aks-partners-logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const [showTopbar, setShowTopbar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowTopbar(true);
//       } else {
//         setShowTopbar(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setShowTopbar(true); // force show for testing
//   }, []);

//   return (
//     <>
//       <div className="navbar-aks">
//         {/* ?topbar */}
//         <>
//           {" "}
//           <div>
//             {/* Topbar */}
//             <motion.div
//               initial={{ y: -80, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ type: "spring", stiffness: 80, damping: 10 }}
//               style={{
//                 // position: "fixed",
//                 // top: 0,
//                 // left: 0,
//                 // right: 0,
//                 backgroundColor: "#275c6e",
//                 color: "white",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "6px 12px", // 👈 Reduced padding
//                 fontWeight: "bold",
//                 fontSize: "16px", // 👈 Slightly smaller text
//                 // zIndex: 9999,
//                 // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//                 transform: "rotate(0deg)",
//                 height: "42px", // 👈 Fixed shorter height
//               }}
//             >
//               {/* Smooth ringing + bounce animation for phone icon */}
//               <motion.span
//                 animate={{
//                   rotate: [0, -15, 15, -10, 10, -5, 5, 0],
//                   scale: [1, 1.2, 1],
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 style={{
//                   fontSize: "26px",
//                   marginRight: "12px",
//                   color: "#fff",
//                   display: "inline-block",
//                   transformOrigin: "center center",
//                 }}
//               >
//                 <FiPhoneCall />
//               </motion.span>
//               Talk to Us Now —{" "}
//               <span style={{ marginLeft: "10px", color: "#9fb03a" }}>
//                 +91 98765 43210
//               </span>
//             </motion.div>
//           </div>
//         </>
//         {/* topbar */}
//         <nav className="navbar">
//           <link to="/">
//             <div className="logo">
//               <a href="#">
//                 <img className="logo-icon" src={Logo} />
//               </a>
//             </div>
//           </link>
//           <ul className="nav-items">
//             <li>
//               <a href="#">
//                 <Link to="/Expertise">Expertise</Link>
//               </a>
//             </li>

//             <li>
//               <Link t0="/Team">
//                 <a href="/team">Our Team</a>
//               </Link>
//             </li>
//             <li>
//               <Link t0="/Contact">
//                 <a href="/contact">Contact Us</a>
//               </Link>
//             </li>

//             <li>
//               <button className="burger" onClick={toggleSidebar}>
//                 ☰
//               </button>
//             </li>
//           </ul>
//         </nav>

//         <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//           <button className="close-btn" onClick={toggleSidebar}>
//             ×
//           </button>
//           <Link to="/Expertise">
//             <a href="#" onClick={toggleSidebar}>
//               About the Firm
//             </a>
//           </Link>
//           <Link to="/Team">
//             <a href="#" onClick={toggleSidebar}>
//               Expertise
//             </a>
//           </Link>
//           <Link to="/Team">
//             <a href="#" onClick={toggleSidebar}>
//               Our Team
//             </a>
//           </Link>
//           <Link to="/Contact">
//             <a href="#" onClick={toggleSidebar}>
//               Notable Deals
//             </a>
//           </Link>
//           <Link to="/Contat">
//             <a href="#" onClick={toggleSidebar}>
//               Thought Leadership
//             </a>
//           </Link>
//           <Link to="/Contact">
//             <a href="#" onClick={toggleSidebar}>
//               Awards & Rankings
//             </a>
//           </Link>

//           <Link to="/Contact">
//             <a href="/contact" onClick={toggleSidebar}>
//               Careers
//             </a>
//           </Link>

//           <Link to="/Contact">
//             <a href="/contact" onClick={toggleSidebar}>
//               Contact Us
//             </a>
//           </Link>
//         </div>

//         {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../imgs/aks-partners-logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const [showTopbar, setShowTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopbar(true);
      } else {
        setShowTopbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowTopbar(true); // force show for testing
  }, []);

  return (
    <>
      <div className="navbar-aks">
        {/* ?topbar */}
        <>
          <div>
            {/* Topbar */}
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
              style={{
                backgroundColor: "#275c6e",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 12px",
                fontWeight: "bold",
                fontSize: "16px",
                transform: "rotate(0deg)",
                height: "42px",
              }}
            >
              <motion.span
                animate={{
                  rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  fontSize: "26px",
                  marginRight: "12px",
                  color: "#fff",
                  display: "inline-block",
                  transformOrigin: "center center",
                }}
              >
                <FiPhoneCall />
              </motion.span>
              Talk to Us Now —{" "}
              <span style={{ marginLeft: "10px", color: "#9fb03a" }}>
                +91 98765 43210
              </span>
            </motion.div>
          </div>
        </>
        {/* topbar */}
        <nav className="navbar">
          <Link to="/" className="logo">
            <img className="logo-icon" src={Logo} alt="Logo" />
          </Link>
          <ul className="nav-items">
            <li className="hide-nav-item">
              <Link to="/Expertise">Expertise</Link>
            </li>
            <li className="hide-nav-item">
              <Link to="/Team">Our Team</Link>
            </li>
            <li className="hide-nav-item">
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <button className="burger" onClick={toggleSidebar}>
                ☰
              </button>
            </li>
          </ul>
        </nav>

        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleSidebar}>
            ×
          </button>
          <Link to="/About" onClick={toggleSidebar}>
            About the Firm
          </Link>
          <Link to="/Expertise" onClick={toggleSidebar}>
            Expertise
          </Link>
          <Link to="/Team" onClick={toggleSidebar}>
            Our Team
          </Link>
          <Link to="/NotableDeals" onClick={toggleSidebar}>
            Notable Deals
          </Link>
          <Link to="/NotableDeals" onClick={toggleSidebar}>
            Thought Leadership
          </Link>
           <Link to="/Awards" onClick={toggleSidebar}>
            Awards & Rankings
          </Link>
          <Link to="/Clients" onClick={toggleSidebar}>
            Clients
          </Link>
          <Link to="/Careers" onClick={toggleSidebar}>
            Careers
          </Link>
          <Link to="/Contact" onClick={toggleSidebar}>
            Contact Us
          </Link>

            <div className="social-icons">
                          <a href="#">
                            <FaFacebook />
                          </a>
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaInstagram />
                          </a>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                        </div>
        </div>

        {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      
      </div>
    </>
  );
};

export default Navbar;
