
    import React from "react";
    import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
    import Navbar from "./components/Navbar";
    import Home from "./components/Home";
    import About from "./components/About";
    import HomePage from './components/HomePage';
    import Contact from "./components/Contact";
    import Coorg from './components/pages/Coorg'
    
    function App() {
      return (
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Coorg" element={<Coorg />} />
            </Routes>
          </div>
        </Router>
      );
    }
    
    export default App;
    



