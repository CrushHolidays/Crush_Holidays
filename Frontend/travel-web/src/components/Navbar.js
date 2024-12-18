import React from "react";
import { Link } from "react-scroll";  // Import from react-scroll
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Travel Site</div>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="packages" smooth={true} duration={500}>
            Packages
          </Link>
        </li>
        <li>
          <Link to="marquee-demo" smooth={true} duration={500}>
            Feedback
          </Link>
        </li>
        <li>
          <Link to="PopularCards" smooth={true} duration={500}>
            PopularCards
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Navbar;



