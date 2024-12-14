import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link, Element } from "react-scroll";
import Navbar from "../src/components/Navbar";
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

function App() {
  return (
    <Router>
      <div>
        <Navbar/>

        {/* Define Routes */}
        <Routes>
          {/* Main Page with In-Page Navigation */}
          <Route
            path="/"
            element={
              <>
                
                
                {/* Sections for In-Page Navigation */}
                {/* <Navbar/> */}
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="packages">
                 <CardPage/>
                </Element>
                
                {/* <Element name="marquee-demo">
                  <MarqueeDemo />
                </Element> */}
                {/* <Element name="feedback-form">
                  
                  <ReviewForm/>
                </Element> */}
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
