import React, { useState } from "react";
import "./Form.css";
import Container from "../Materials/Container";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted:\n" + JSON.stringify(formData, null, 2));
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container
      placeholder="white"
      space="container"
      title="Don't hesitate to ask"
    >
      <p className="text-center">
        Law is complicate matter. It can cause you a big problem if you ignore
        it. Let us help you!{" "}
      </p>
      <div className="form-container">
        <div className="form-box">
          {/* <h2 className="form-title">Don't hesitate to ask</h2>
          <p className="form-subtitle">
            Law is a complicated matter. Let us help you with clarity and care.
          </p> */}

          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
