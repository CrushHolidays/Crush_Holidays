import React from "react";
import './About.css'

function About() {
  return (

        <div className="container">
          <div className="text-section">
            <h1>ಕರ್ನಾಟಕ ಒಂದು ರಾಜ್ಯ ಹಲವು ಜಗತ್ತು
            </h1>
            <p>ಸಾವಿರ ಮೈಲುಗಳ ಪ್ರಯಾಣವು ಒಂದೇ ಹೆಜ್ಜೆಯಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ನಿಮ್ಮೊಂದಿಗೆ ಪ್ರಪಂಚದ ಹೆಚ್ಚಿನದನ್ನು ಅನ್ವೇಷಿಸಲು ಕಾಯಲು ಸಾಧ್ಯವಿಲ್ಲ!.</p>
            <button className="callback-button">
              <a href="tel:+918762680858" >
              <span role="img" aria-label="phone" href>📞</span> 
              Call us now!</a>
              
            </button>
          </div>
          <div className="image-section">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726761927494" alt="Group jumping at sunset" />
          </div>
        </div>
   
    
  );
}

export default About;
