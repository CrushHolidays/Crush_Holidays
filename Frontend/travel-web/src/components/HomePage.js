import React from 'react';
import Card from './Card';
import './HomePage.css';

const destinations = [
    {
        title: 'Coorg',
        image: 'https://images.unsplash.com/photo-1710612198146-77512950a4b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29vcmd8ZW58MHx8MHx8fDA%3D',
        path: '/khajuraho',
        price: '2100',
        discount: '1200',
        packages: 'Silver, Gold, Platinum',
        highlights: ['Ancient Temples', 'Cultural Heritage', 'Scenic Beauty'],
        rating: 3,
        reviews: 1
    },
  
    // ... Add other destinations
];

const HomePage = () => {
    return (
        <div className="home-page">
            {destinations.map((destination, index) => (
                <Card key={index} {...destination} />
            ))}
        </div>
    );
};

export default HomePage;



