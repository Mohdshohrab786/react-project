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
                    <a href="#">About The Firm</a>
                  </li>
                  <li>
                    <a href="#">Expertise</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Notable Deals</a>
                  </li>
                </div>
                <div className="footer-nav-right">
                  <li>
                    <a href="#">Thought Leadership</a>
                  </li>
                  <li>
                    <a href="#">Awards & Rankings</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
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
              <a href="#"> Cookies</a> |

              <a href="#">Privacy Policy</a> |
              <a href="#">Terms of use</a>
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
