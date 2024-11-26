
    import React from "react";
    import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
    import Navbar from "./components/Navbar";
    import Home from "./components/Home";
    import About from "./components/About";
    import Packages from "./components/Packages";
    import Contact from "./components/Contact";
    
    function App() {
      return (
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      );
    }
    
    export default App;
    



