import React from 'react';
import './TrendingPackages.css';

const TrendingPackages = () => {
  const packages = [
    {
      image: 'path/to/coorg-image.jpg',
      name: 'Coorg Tour Package',
      price: '₹5,800',
      duration: '02 Days / 01 Nights'
    },
    {
      image: 'path/to/mysore-coorg-kukke-image.jpg',
      name: 'Coorg, Mysore & Kukke Subramanya',
      price: '₹8,999',
      duration: '03 Days / 02 Nights'
    },
    {
      image: 'path/to/mysore-coorg-image.jpg',
      name: 'Mysore & Coorg Tour',
      price: '₹10,900',
      duration: '04 Days / 03 Nights'
    },
    {
      image: 'path/to/mysore-coorg-package-image.jpg',
      name: 'Mysore & Coorg Tour Package',
      price: '₹10,999',
      duration: '04 Days / 03 Nights'
    }
  ];

  return (
    <div className="tour-packages">
      <h1>Trending Tour Package</h1>
      <div className="cards">
        {packages.map((pkg, index) => (
          <div className="card" key={index}>
            <img src={pkg.image} alt={pkg.name} />
            <div className="card-content">
              <h3>{pkg.name}</h3>
              <p>Price: {pkg.price}</p>
              <p>Duration: {pkg.duration}</p>
              <button className="enquiry-button">Send Enquiry</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPackages;
