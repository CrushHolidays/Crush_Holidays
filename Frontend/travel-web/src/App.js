import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link, Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PackageList from "./PackageList";
import PackageDetails from "./components/PackageDetails";
import MarqueeDemo from "./components/MarqueeDemo";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Main Page with In-Page Navigation */}
          <Route
            path="/"
            element={
              <>
                <nav className="nav">
                  <ul>
                    <li>
                      <Link to="home" smooth={true} duration={1000}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="about" smooth={true} duration={1000}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="packages" smooth={true} duration={1000}>
                        Packages
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" smooth={true} duration={1000}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="marquee-demo" smooth={true} duration={1000}>
                        Marquee Demo
                      </Link>
                    </li>
                  </ul>
                </nav>
                
                {/* Sections for In-Page Navigation */}
                <Navbar/>
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="packages">
                  <PackageList />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
                <Element name="marquee-demo">
                  <MarqueeDemo />
                </Element>
                <Element name="marquee-demo">
                  <MarqueeDemo />
                </Element>
              </>
            }
          />

          {/* Dynamic Route for Package Details */}
          <Route path="/packages/:id" element={<PackageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
