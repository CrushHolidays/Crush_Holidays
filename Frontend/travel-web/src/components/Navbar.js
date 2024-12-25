import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if on homepage

  return (
    <div className="navbar">
      <div className="logo">Travel Site</div>
      <ul>
        {isHomePage ? (
          <>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-80} // Adjust offset to account for navbar height
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="packages"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Packages
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="marquee-demo"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Feedback
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="PopularCards"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Popular Cards
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Contact
              </ScrollLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/">About</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Packages</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Feedback</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Popular Cards</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Contact</RouterLink>
            </li>
            <li>
              <RouterLink to="/">VehicleCard</RouterLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;

