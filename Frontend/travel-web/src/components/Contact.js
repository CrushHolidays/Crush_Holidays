import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>HEARD ENOUGH?</p>
        <h2>Contact</h2>
        {/* <button className="contact-button">→</button> */}
      </div>
      <div className="footer-bottom">
        <div className="footer-column">
          <h3>The agency for Make Your Travel Safe</h3>
          <p><a href="mailto:newbusiness@weareimpero.com">newbusiness@weareimpero.com</a></p>
          <p>+44 20 7989 7591</p>
          <p>Unit 306, Metropolitan Wharf,<br />70 Wapping Wall, London E1W 3SS</p>
          <a href="#map-london">SEE ON MAP ↗</a>
        </div>
        <div className="footer-column">
          <p><a href="mailto:buenosaires@weareimpero.com">buenosaires@weareimpero.com</a></p>
          <p>+54 11 6789 7849</p>
          <p>Cabildo 1455 1st floor, Buenos Aires</p>
          <a href="#map-buenos-aires">SEE ON MAP ↗</a>
        </div>
        <div className="footer-column">
          <p>WANT TO BE THE SMARTEST IN YOUR OFFICE?</p>
          <a href="#newsletter">SIGN UP FOR OUR NEWSLETTER ↗</a>
          <div className="social-icons">
            <a href="#behance">Behance</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;



