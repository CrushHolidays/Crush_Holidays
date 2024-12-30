import React from 'react';
import vehicle1 from '../assets/images/vehicle1.jpg'; // Adjust path based on your directory structure
import vehicle2 from '../assets/images/vehicle2.jpg';
import vehicle3 from '../assets/images/vehicle3.jpg';
import bus from '../assets/images/bus.jpg';
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
      image: vehicle1,
      title: 'Mini Bus',
      description: 'Spacious and comfortable, perfect for group travel and long-distance journeys.',
      price: 'Diesel/Petrol available'
    },
    {
      image: vehicle3,
      title: '4 Seater Car',
      description: 'Sleek and efficient, ideal for personal or small family use..',
      price: 'Available with low-emission engines',
    },
    {
      image:  vehicle2,
      title: '7 Seater Car',
      description: ' Versatile and powerful, perfect for family trips and adventures.',
      price: 'Diesel/Petrol available',
    },
    {
      image: bus,
      title: 'Bus',
      description: 'Stylish and eco-friendly, the future of sustainable urban commuting.',
      price: 'Available with hybrid options.',
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
            <p className="vehicle-price">{vehicle.price}</p>
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
