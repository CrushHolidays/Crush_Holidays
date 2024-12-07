import React from 'react';
import './Contact.css';
import { FiInstagram } from "react-icons/fi";


const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Connect with our team</h2>
        {/* <p>Address: Ground floor, No 800/7A, Bogadi 2nd Stage South Park, Bogadi Road. Near Amritha College Mysore Karnataka – 570026</p> */}
         <p>GST – XXXXXXXXXXXXXXX</p>
        <p>Phone: XXXXXXXXXXXXXXX</p>
        <p>Email: crushholidays@gmail.com</p>
        <div className="social-media">
          <a href="https://www.instagram.com/crush_holidayz_09/?igsh=MXNvYmRpNW9laWgzNQ%3D%3D#" target="_blank" rel="noopener noreferrer">
          <FiInstagram size={50}  color='#ff6600'/>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Let us Contact you</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Phone No" required />
          <input type="text" placeholder="Your City" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <footer>
        <p>Powered by Crushholidays, Design & Developed by Team Alpha</p>
        <p>We are committed to safeguarding the personal information and data you share with us. Your trust is important to us, and we want to ensure that you are fully informed about how we handle your data. To learn more about our data protection practices and your rights, please read our full Privacy Policy.</p>
      </footer>
    </div>
  );
};

export default Contact;


