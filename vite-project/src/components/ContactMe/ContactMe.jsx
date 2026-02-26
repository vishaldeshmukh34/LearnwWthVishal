// ContactMe.jsx
import React, { useState } from "react";
import "./ContactMe.css";

const ModernContact = () => {
  const [data, setData] = useState({ fullName: "", emailAddress: "", messageContent: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate EmailJS/Formspree if needed
    setIsSubmitted(true);
    setData({ fullName: "", emailAddress: "", messageContent: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };
  

  return (
    
    <section id="modern-contact-section">
        <section id="contact"></section>
      <div className="modern-contact-wrapper">
        <h2 className="modern-contact-heading">Get in Touch</h2>
        <p className="modern-contact-description">
          I’d love to connect with you! Send me a message or reach out via the details below.
        </p>

        <div className="modern-contact-grid">
          <form className="modern-contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={data.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="emailAddress"
              placeholder="Email Address"
              value={data.emailAddress}
              onChange={handleChange}
              required
            />
            <textarea
              name="messageContent"
              placeholder="Your Message"
              rows="6"
              value={data.messageContent}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="modern-contact-btn">
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          <div className="modern-contact-info">
            <div className="modern-info-card">
              <h4>Email</h4>
              <p>hello@portfolio.com</p>
            </div>
            <div className="modern-info-card">
              <h4>Phone</h4>
              <p>+91 9876543210</p>
            </div>
            <div className="modern-info-card">
              <h4>Location</h4>
              <p>Pune, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;