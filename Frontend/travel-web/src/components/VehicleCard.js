import React from 'react';
import './VehicleCard.css';

function VehicleCard() {
  return (
    <div className="vehicle-card">
      {/* Vehicle Image */}
      <img 
        src="https://via.placeholder.com/350x200" 
        alt="Vehicle" 
        className="vehicle-image" 
      />
      
      {/* Vehicle Content */}
      <div className="vehicle-content">
        <h3 className="vehicle-title">Luxury Sedan</h3>
        <p className="vehicle-description">
          A luxury sedan with spacious interiors, perfect for long trips. Comfortable, stylish, and reliable.
        </p>
        <p className="vehicle-price">Price: $100/day</p>
      </div>
      
      {/* Buttons */}
      <div className="vehicle-buttons">
        <button className="btn book-now">Book Now</button>
        <button className="btn enquiry">Enquiry</button>
      </div>
    </div>
  );
}

export default VehicleCard;
