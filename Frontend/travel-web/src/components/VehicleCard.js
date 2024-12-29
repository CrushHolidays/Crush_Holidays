import React from 'react';
import vehicle1 from '../assets/images/vehicle1.jpg'; // Adjust path based on your directory structure
import vehicle2 from '../assets/images/vehicle2.jpg';
import vehicle3 from '../assets/images/vehicle3.jpg';

import './VehicleCard.css';

function VehicleCard() {
  const vehicles = [
    {
      image: vehicle1,
      title: 'Luxury Sedan',
      description: 'A luxury sedan with spacious interiors, perfect for long trips. Comfortable, stylish, and reliable.',
      price: '$100/day',
    },
    {
      image: vehicle3,
      title: 'Sports Car',
      description: 'Experience the thrill of driving a high-performance sports car with exceptional speed and handling.',
      price: '$200/day',
    },
    {
      image:  vehicle2,
      title: 'SUV',
      description: 'A spacious and versatile SUV, ideal for families and adventures. Comes with advanced safety features.',
      price: '$120/day',
    },
    {
      image: 'https://vehiclecare.in/blaze/wp-content/uploads/2023/10/Tata-nexon.jpg',
      title: 'Electric Car',
      description: 'Eco-friendly electric car with a sleek design and cutting-edge technology for a sustainable drive.',
      price: '$150/day',
    },
  ];

  return (
    <div className="vehicle-card-container">
      <div className='vehicle-heading'>
        <h1>OUR VEHICLES</h1>
      </div>
      <div className="vehicle-list">
      {vehicles.map((vehicle, index) => (
        <div key={index} className="vehicle-card">
          {/* Vehicle Image */}
          <img 
            src={vehicle.image} 
            alt={vehicle.title} 
            className="vehicle-image" 
          />
          
          {/* Vehicle Content */}
          <div className="vehicle-content">
            <h3 className="vehicle-title">{vehicle.title}</h3>
            <p className="vehicle-description">{vehicle.description}</p>
            <p className="vehicle-price">Price: {vehicle.price}</p>
          </div>
          
          {/* Buttons */}
          <div className="vehicle-buttons">
            <button className="btn book-now">Book Now</button>
            <button className="btn enquiry">Enquiry</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default VehicleCard;
