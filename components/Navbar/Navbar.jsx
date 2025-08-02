import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarStyle from "./NavbarStyle.module.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${NavbarStyle.bg_main} ${
        !showNavbar ? NavbarStyle.hide : ""
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand text-white fw-bolder fs-3" to="/">
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars text-white fs-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-5 py-3">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white fw-bolder text-center fs-5 ${
                    isActive ? NavbarStyle.active : ""
                  }`
                }
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white fw-bolder text-center ${
                    isActive ? NavbarStyle.active : ""
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white fw-bolder text-center ${
                    isActive ? NavbarStyle.active : ""
                  }`
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white fw-bolder text-center ${
                    isActive ? NavbarStyle.active : ""
                  }`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
