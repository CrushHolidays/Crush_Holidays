import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>READY TO EMBARK ON YOUR NEXT ADVENTURE?</p>
        <h2>Contact Us</h2>
        {/* <button className="contact-button">→</button> */}
      </div>
      <div className="footer-bottom">
        <div className="footer-column">
          <h3>Your Trusted Travel Companion</h3>
          <p>
            <a href="mailto:crushholidays09@gmail.com">crushholidays09@gmail.com</a>
          </p>
          <p>9611001991</p>
          <p>
            85/4, Excel Public School Rd, Koorgally, <br />
            Mysuru, Karnataka 570018
          </p>
          <a href="https://www.google.com/maps?q=85/4+Excel+Public+School+Rd,+Koorgally,+Mysuru,+Karnataka+570018" target="_blank" rel="noopener noreferrer">
            SEE ON MAP ↗
          </a>
        </div>
        <div className="footer-column">
          <p>
            <a href="mailto:crushholidays09@gmail.com">crushholidays09@gmail.com</a>
          </p>
          <p>Built By</p>
          <p>Team Manoj</p>
          
        </div>
        <div className="footer-column">
          <p>LOVE TO TRAVEL BUT NEED INSPIRATION?</p>
          <a href="#newsletter">Join UP FOR OUR Holidays ↗</a>
          <div className="social-icons">
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
