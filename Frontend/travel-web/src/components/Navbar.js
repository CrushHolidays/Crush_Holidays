import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
        <li><Link to="packages" smooth={true} duration={1000}>Packages</Link></li>
        <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
        <li><Link to="coorg" smooth={true} duration={1000}>Coorg</Link></li>
        <li><Link to="marquee-demo" smooth={true} duration={1000}>Marquee Demo</Link></li>
        <li><Link to="test" smooth={true} duration={1000}>HomePage</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

