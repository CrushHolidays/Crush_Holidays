import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="quote-form">
      <h2>Get Free Quote</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone No" required />
        <input type="text" placeholder="Your City" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Form;
