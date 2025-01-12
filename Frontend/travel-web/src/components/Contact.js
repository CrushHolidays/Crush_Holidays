import React from 'react';
import './Contact.css';
import { FaInstagram} from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-column">
          <h3>Your Trusted Travel Companion</h3>
          <p>
            <a href="mailto:crushholidays09@gmail.com">crushholidays09@gmail.com</a>
          </p>
          <p>
            85/4, Excel Public School Rd, Koorgally, <br />
            Mysuru, Karnataka 570018
          </p>
         
        </div>
        <div className="footer-column">
          <p>
            <a href="mailto:crushholidays09@gmail.com">crushholidays09@gmail.com</a>
          </p>
          <p>9611001991/8147169252</p>
         
          <p>Built By : Team Alpha</p>
          
        </div>
        <div className="footer-column">
          <p>LOVE TO TRAVEL BUT NEED INSPIRATION?</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/crush_holidayz_09/?igsh=MXNvYmRpNW9laWgzNQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={30} />
            </a>
            
              
            
            <a
  href="https://www.google.com/maps?q=85/85/4,Excel+Public+School+Rd,Koorgally,Mysuru,Karnataka,570018"
  target="_blank"
  rel="noopener noreferrer"
>
            SEE ON MAP ↗
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

