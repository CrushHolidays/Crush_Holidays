import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import HomePage from './components/HomePage';
import Contact from "./components/Contact";
import PackageList from "./PackageList";
import Coorg from './components/pages/Coorg';
import Card from "./components/Card";
import MarqueeDemo from "./components/MarqueeDemo";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <nav className="nav">
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

        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="packages">
          <Card />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element name="coorg">
          <PackageList />
        </Element>
        <Element name="marquee-demo">
          <MarqueeDemo />
        </Element>
        <Element name="test">
          <HomePage />
        </Element>
      </div>
    </Router>
  );
}

export default App;
    



