import React from 'react';
import vehicle1 from '../assets/images/vehicle1.jpg'; // Adjust path based on your directory structure
import vehicle2 from '../assets/images/vehicle2.jpg';
import vehicle3 from '../assets/images/vehicle3.jpg';
import vehicle4 from '../assets/images/vehicle4.jpg';
import vehicle5 from '../assets/images/vehicle5.jpg';
import vechile6 from '../assets/images/vechile6.jpg';
import vechile7 from '../assets/images/vechile7.jpg';
import vechile8 from '../assets/images/vechile8.jpg';
import vechile9 from '../assets/images/vechile5.png';
import vechile10 from '../assets/images/vechile10.png';
import './VehicleCard.css';

function VehicleCard() {
  const handleWhatsAppClick = (phoneNumber, message) => {
    const sanitizedNumber = phoneNumber.replace(/\s+/g, '').replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
};
const vehicles = [
  {
    image: vehicle3,
    title: '4-seater',
    description: 'Available with low-emission engines, ideal for personal or small family use, offering a comfortable and eco-friendly ride.',
    price: '12 Rs/km',
  },
  {
    image: vehicle2,
    title: '7-seater (SUV)',
    description: 'Diesel/Petrol available, a spacious and versatile choice for family trips and outdoor adventures.',
    price: '16-18 Rs/km',
  },
  {
    image: vehicle1,
    title: 'Tempo Travels (TT)',
    description: 'Diesel/Petrol available, perfect for corporate travel or group trips, offering comfort and convenience.',
    price: '18-20 Rs/km',
  },
  {
    image: vechile7,
    title: '21-seater',
    description: 'Diesel available, designed for medium-sized groups, ideal for longer trips with comfort and reliability.',
    price: '28-30 Rs/km',
  },
  {
    image: vechile8,
    title: '33-seater',
    description: 'Diesel available, perfect for larger group travel, offering ample space for comfort during long journeys.',
    price: '38-40 Rs/km',
  },
  {
    image: vechile9,
    title: '40-seater',
    description: 'Diesel available, ideal for large groups, providing efficient and comfortable travel for corporate events or big family outings.',
    price: '45-50 Rs/km',
  },
  {
    image:vechile10,
    title: '50-seater',
    description: 'Diesel available, the ultimate choice for large group travel, ensuring a smooth and enjoyable experience for any occasion.',
    price: '50-55 Rs/km',
  }
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
            <p className="vehicle-price"><b>{vehicle.price}</b></p>
          </div>
          
          {/* Buttons */}
          <div className="vehicle-buttons">
            <button className="btn book-now" onClick={()=>handleWhatsAppClick("+919611001991",`Want to Enquiry About the ${vehicle.title}  `)}>Book Now</button>
            <a href="tel:+9611001991" ><button className="btn enquiry"><span role="img" aria-label="phone" href>📞</span> Enquiry</button></a>
            
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default VehicleCard;