import React from "react";
import "./Footer.css";
import SectionContainer from "../Materials/Section/Section";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../imgs/logo-white.png";
import AnimeText from "../Materials/AnimeText/AnimeText";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    {/*  */}
      <footer className="footer">
        <SectionContainer>
          <div className="footer-columns">
            {/* Column 1 */}
            <div className="footer-col">
              {/* <img src={Logo} width={"220px"} height={"80px"} /> */}
              <AnimeText />
            </div>
 
            {/* Column 2 */}
            <div className="footer-col">
<ul className="footer-nav">
  <div className="footer-nav-left">
    <li>
      <Link to="/About">About The Firm</Link>
    </li>
    <li>
      <Link to="/Expertise">Expertise</Link>
    </li>
    <li>
      <Link to="/Team">Our Team</Link>
    </li>
    <li>
      <Link to="/NotableDeals">Notable Deals</Link>
    </li>
  </div>

  <div className="footer-nav-right">
    <li>
      <Link to="/ThoughtLeadership">Thought Leadership</Link>
    </li>
    <li>
      <Link to="/Awards">Awards & Rankings</Link>
    </li>
    <li>
      <Link to="/Careers">Careers</Link>
    </li>
    <li>
      <Link to="/Contact">Contact Us</Link>
    </li>
  </div>
</ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
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
          </div>
        </SectionContainer>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-7 col-xl-7">
              <p>
                © {new Date().getFullYear()} AKS Partners. All rights reserved.
              </p>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 footer-3-links">
              <Link to="/sitemap"> Sitemap</Link> |
              <a href="/cookies"> Cookies</a> |

              <a href="/privacy-policy">Privacy Policy</a> |
              <a href="/terms-of-use">Terms of use</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// import React from "react";
// import SectionContainer from "../Materials/Section/Section";
// import "./Footer.css"; // Assuming you have a CSS file for styling

// const Footer = () => {
//   return (
//     <footer>
//       <SectionContainer>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//                 <h4>About Us</h4>
//             </div>
//             <div className="col-md-4"></div>
//             <div className="col-md-4"></div>
//           </div>
//         </div>
//       </SectionContainer>
//     </footer>
//   );
// };

// export default Footer;
