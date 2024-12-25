import React from "react";
import './About.css'

function About() {
  return (

        <div className="container">
          <div className="text-section">
            <h1>Bigger Group? Get special offers up to 50% Off!</h1>
            <p>We create unforgettable adventures, customized for your group.</p>
            <button className="callback-button">
              <a href="tel:+918762680858" >
              <span role="img" aria-label="phone" href>📞</span> 
              Call us now!</a>
              
            </button>
          </div>
          <div className="image-section">
            <img src="https://www.puredestinations.co.uk/wp-content/uploads/2019/10/where-to-go-on-holiday-in-october-luxury-holiday-packages--1600x700.jpg" alt="Group jumping at sunset" />
          </div>
        </div>
   
    
  );
}

export default About;
