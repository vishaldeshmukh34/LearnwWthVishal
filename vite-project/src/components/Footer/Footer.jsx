import React, { useEffect, useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const ModernFooter = () => {
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("modern-footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }

      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="modern-footer"
      className={`footer ${visible ? "show-footer" : ""}`}
    >
      {/* Animated Wave */}
      <div className="wave">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#1e3a8a"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,149.3C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="footer-wrapper">
        {/* Brand */}
        <div className="footer-about glass">
          <h2>LearnWithVishal</h2>
         <p className="hero-description">
  Empowering students with <span>modern tech skills</span>, 
  <span> real-world projects</span>, and 
  <span> 100% placement support</span>. 
  Build your dream career today.
</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links glass">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => scrollToSection("hero")}>Home</li>
            <li onClick={() => scrollToSection("courses")}>Courses</li>
            <li onClick={() => scrollToSection("programs")}>Programs</li>
            <li onClick={() => scrollToSection("placement")}>Placement</li>
            <li onClick={() => scrollToSection("pricing")}>Pricing</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social glass">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTop && (
        <div className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} LearnWithVishal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default ModernFooter;