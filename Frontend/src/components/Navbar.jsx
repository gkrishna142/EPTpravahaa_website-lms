import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "react-feather";
import logo from "../assets/images/logo.jpg";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand-wrap">
            <img src={logo} alt="EPTPRAVAHAA" className="navbar__logo" />
            <div className="navbar__brand">
              <span className="navbar__brand-name">EPTPRAVAHAA</span>
              <span className="navbar__brand-tagline">EDU TECH SOLUTIONS</span>
            </div>
          </Link>

          <nav className="navbar__nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/edupravahaa"
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
            >
              Courses
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
            >
              About
            </NavLink>
            <NavLink
              to="/Services"
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
            >
              Contact
            </NavLink>
          </nav>

          <div className="navbar__cta-wrap">
            <Link to="/enroll" className="navbar__btn-enroll">
              Enroll Now
            </Link>
          </div>

          <button
            type="button"
            className="navbar__mobile-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`navbar__mobile-nav ${mobileOpen ? "navbar__mobile-nav--open" : ""}`}>
        <button
          type="button"
          className="navbar__mobile-close"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          <X size={22} />
        </button>
        <NavLink to="/" end className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/edupravahaa" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
          Courses
        </NavLink>
        <NavLink to="/About" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
          About
        </NavLink>
        <NavLink to="/Services" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/contact" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
          Contact
        </NavLink>
        <div className="navbar__mobile-ctas">
          <Link to="/enroll" className="navbar__btn-enroll" onClick={() => setMobileOpen(false)}>
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
