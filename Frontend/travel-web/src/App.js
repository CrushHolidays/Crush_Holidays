import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";import { Link, Element } from "react-scroll";

// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PackageDetails from "./components/PackageDetails";
import MarqueeDemo from "./components/MarqueeDemo";
import "./App.css";
import ReviewForm from "./components/ReviewForm";
import CardPage from "./components/HomePage";
import PopularCards from "./components/PopularCards";
import VehicleCard from "./components/VehicleCard";
// import AboutUs from "./components/AboutUs";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                {/* <Element name="AboutUs">
                  <AboutUs />
                </Element> */}
                <Element name="packages">
                  <CardPage />
                </Element>
                <Element name="VehicleCard">
                  <VehicleCard />
                </Element>
                <Element name="marquee-demo">
                  <MarqueeDemo />
                // </Element>
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
          <Route path="/packages/:id" element={<PackageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


