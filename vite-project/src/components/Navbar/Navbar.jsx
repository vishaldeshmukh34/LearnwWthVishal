import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("hero");

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

      setActive(id); // highlight active link
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "courses", label: "Courses" },
    { id: "programs", label: "Programs" },
    { id: "placement", label: "Placement" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      ></div>

      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="nav-container">
          
          {/* Logo */}
          <div
            className="logo"
            onClick={() => scrollToSection("hero")}
          >
            LearnWith<span>Vishal</span>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={active === item.id ? "active-link" : ""}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}

            <button
              className="enroll-btn"
              onClick={() => scrollToSection("pricing")}
            >
              Enroll Now
            </button>
          </ul>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;