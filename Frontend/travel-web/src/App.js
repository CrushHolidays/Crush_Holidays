import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link, Element } from "react-scroll";
<<<<<<< HEAD
=======
import Navbar from "../src/components/Navbar";
>>>>>>> 6497637671e906e23fcca1fa3233196eb4cfa220
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PackageList from "./PackageList";
import PackageDetails from "./components/PackageDetails";
import MarqueeDemo from "./components/MarqueeDemo";
import "./App.css";
import ReviewForm from "./components/ReviewForm";
// import HomePage from "./components/HomePage";
import CardPage from "./components/HomePage";
import PopularCards from "./components/PopularCards";

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
=======
        <Navbar/>

>>>>>>> 6497637671e906e23fcca1fa3233196eb4cfa220
        {/* Define Routes */}
        <Routes>
          {/* Main Page with In-Page Navigation */}
          <Route
            path="/"
            element={
              <>
<<<<<<< HEAD
                {/* Remove the Navbar here */}
                {/* <nav className="nav">
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
                      <Link to="contact" smooth={true} duration={500}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="feedback-form" smooth={true} duration={500}>
                        Feedback
                      </Link>
                    </li>
                    <li>
                      <Link to="marquee-demo" smooth={true} duration={500}>
                        Marquee Demo
                      </Link>
                    </li>
                  </ul>
                </nav> */}
=======
                
>>>>>>> 6497637671e906e23fcca1fa3233196eb4cfa220
                
                {/* Sections for In-Page Navigation */}
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="packages">
                  <CardPage />
                </Element>

                <Element name="marquee-demo">
                  <MarqueeDemo />
                </Element>
                <Element name="feedback-form">
                  <ReviewForm />
                </Element>
                <Element name="PopularCards">
                  <PopularCards />
                </Element>
                <Element name="contact">
                  <Contact />
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

