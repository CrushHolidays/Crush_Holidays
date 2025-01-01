import React, { useState, useEffect } from "react";  
import { Link as ScrollLink } from "react-scroll";  
import { Link as RouterLink, useLocation } from "react-router-dom";  
import logo from '../../src/assets/images/logo.jpg'
import "./Navbar.css";  
  
function Navbar() {  
  const location = useLocation();  
  const isHomePage = location.pathname === "/";  
  const [showNavbar, setShowNavbar] = useState(false);  
  
  const handleToggleNavbar = () => {  
   setShowNavbar(!showNavbar);  
  };  
  
  const handleCloseNavbar = () => {  
   setShowNavbar(false);  
  };  
  
  return (  
   <div>  
    <header className="Header">  
      <nav className="navbar">  
       <div className="logo">  
       <img src={logo} alt="Logo" />
       </div>  
       {!showNavbar && (  
        <div className="toggle-button" onClick={handleToggleNavbar}>  
          &#9776;  
        </div>  
       )}  
       {showNavbar && (  
        <div className="close-button" onClick={handleCloseNavbar}>  
          &times;  
        </div>  
       )}  
       <ul className={showNavbar ? "show-navbar" : ""}>  
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
           {/* <li>  
            <ScrollLink  
              to="marquee-demo"  
              smooth={true}  
              duration={500}  
              offset={-80}  
            >  
              Feedback  
            </ScrollLink>  
           </li>   */}
           <li>  
            <ScrollLink  
              to="PopularCards"  
              smooth={true}  
              duration={500}  
              offset={-80}  
            >  
              Popular Destinations  
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
           <li>  
            <ScrollLink  
              to="VehicleCard"  
              smooth={true}  
              duration={500}  
              offset={-80}  
            >  
              <button>Book now </button>  
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
           {/* <li>  
            <RouterLink to="/">Feedback</RouterLink>  
           </li>   */}
           <li>  
            <RouterLink to="/">Popular Destinations</RouterLink>  
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
      </nav>  
    </header>  
   </div>  
  );  
}  
  
export default Navbar;














