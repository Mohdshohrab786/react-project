import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeroImg from "../Materials/Hero/HeroImg";
import Img from "../imgs/heroImgs/contact2.png";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs
      .sendForm(
        "service_5iol17l",   // replace with your EmailJS service ID
       "template_hz7t41j",  // replace with your EmailJS template ID
        form.current,
        "fIcax2R3kddxDr2gw"    // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <HeroImg image={Img}> Contact Us</HeroImg>
      <div className="contact-page">
        <div className="container">
          <div className="contact-container">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Our Office</h3>
                <p>123 Business Street,<br />New Delhi, India</p>
              </div>
              <div className="info-card">
                <i className="fas fa-phone-alt"></i>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
              <div className="info-card">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>info@akspartners.com</p>
              </div>
            </div>

            {/* Form + Map */}
            <div className="contact-form-map">
              {/* Form */}
              <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <h2>Send us a Message</h2>
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Your Phone" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>

              {/* Map */}
              <div className="map-container">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.24454906882!2d77.068897!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2baf23c7b59%3A0x2c0b1f3af3b7e5c5!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1677600000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


// import React from "react";
// import SectionContainer from "../Materials/Section/Section";
// import "./Contact.css";
// import HeroImg from "../Materials/Hero/HeroImg";
// import Img from "../imgs/heroImgs/contact2.png";
// import BackgroundImage from "../Materials/Hero/HeroImg";

// const Contact = () => {
//   return (
//     <>
//       <HeroImg image={Img}> Contact Us</HeroImg>
//       <div className="contact-page">
//         {/* Header */}
//         <div className="contact-header">{/* <h1>Contact Us</h1> */}</div>
//         <div className="container">
//           <div className="contact-container">
//             {/* Contact Info Cards */}
//             <div className="contact-info">
//               <div className="info-card">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <h3>Our Office</h3>
//                 <p>
//                   123 Business Street,
//                   <br /> New Delhi, India
//                 </p>
//               </div>
//               <div className="info-card">
//                 <i className="fas fa-phone-alt"></i>
//                 <h3>Call Us</h3>
//                 <p>+91 98765 43210</p>
//               </div>
//               <div className="info-card">
//                 <i className="fas fa-envelope"></i>
//                 <h3>Email</h3>
//                 <p>info@akspartners.com</p>
//               </div>
//             </div>

//             {/* Form + Map */}
//             <div className="contact-form-map">
//               {/* Form */}
//               <form className="contact-form">
//                 <h2>Send us a Message</h2>
//                 <input type="text" placeholder="Your Name" required />
//                 <input type="tel" placeholder="Your Phone" required />
//                 <input type="email" placeholder="Your Email" required />
//                 <input type="text" placeholder="Subject" required />
//                 <textarea placeholder="Message" rows="5" required></textarea>
//                 <button type="submit">Send Message</button>
//               </form>

//               {/* Map */}
//               <div className="map-container">
//                 <iframe
//                   title="Office Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.24454906882!2d77.068897!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2baf23c7b59%3A0x2c0b1f3af3b7e5c5!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1677600000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
