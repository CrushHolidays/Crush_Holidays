import React from 'react';
import './PopularCards.css';

const PopularCards = ({ title, description, image }) => {
  return (
    <div className="popular-card">
      <img src={image} alt={title} className="popular-card-image" />
      <div className="popular-card-content">
        <h3 className="popular-card-title">{title}</h3>
        <p className="popular-card-description">{description}</p>
      </div>
    </div>
  );
};

export default PopularCards;
