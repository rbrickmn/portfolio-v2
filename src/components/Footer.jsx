import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToAbout: true } });
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a onClick={handleAboutClick} className="link link-hover">
          About
        </a>
        <Link to="/projects" className="link link-hover">
          Projects
        </Link>
        <a onClick={handleContactClick} className="link link-hover">
          Contact
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Your existing social links */}
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Riley
          Brickman
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
