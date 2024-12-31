import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
  // Define state for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);  // For loading state

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate phone number format (basic validation)
  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;  // Assuming a 10-digit phone number
    return regex.test(phone);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!name || !email || !phone || !city) {
      alert('Please fill out all fields');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);  // Set loading state to true while submitting

    try {
      const response = await axios.post('https://crush-holidays-backend.onrender.com/api/v1/user', {
        Name: name,
        Phone_no: phone,
        email,
        city,
      });

      if (response.status === 200) {
        alert('Your inquiry has been submitted successfully.');
        // Clear the form
        setName('');
        setEmail('');
        setPhone('');
        setCity('');
      } else {
        alert(response.data.message || 'An error occurred while submitting your inquiry.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle different error types (network error, server error, etc.)
      if (error.response) {
        alert(error.response.data.message || 'An error occurred while submitting your inquiry.');
      } else if (error.request) {
        alert('Network error. Please try again later.');
      } else {
        alert('An unknown error occurred.');
      }
    } finally {
      setLoading(false);  // Set loading state back to false after submission
    }
  };

  return (
    <div className="quote-form">
      <h2>Get Free Quote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Your Phone No"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Form;
