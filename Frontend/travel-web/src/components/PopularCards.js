import React from 'react';
import './PopularCards.css';

const PopularCards = () => {
  const popularPlaces = [
    {
      title: 'MYSORE',
      description: 'A historic landmark in Mysore,Karnataka',
      image: 'https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg',
    },
    {
      title: 'Kerala',
      description: 'A structure in kerala .',
      image: 'https://ihplb.b-cdn.net/wp-content/uploads/2021/09/kerala-in-october-kollam-header-675x430.jpg',
    },
    {
      title: 'Coorg',
      description: 'Scotland of karnataka , Coorg',
      image: 'https://static.toiimg.com/thumb/47068905.cms?resizemode=75&width=1200&height=900',
    },
    {
      title: 'Sakleshpur',
      description: 'A view point',
      image: 'https://www.trawell.in/admin/images/upload/343093893Sakleshpur_Bisle_Ghat.jpg',
    },
  ];

  return (
    <div className="popular">
      <div className="popular-heading">TOP DESTINATIONS </div>
      <div className="popular-cards-container">
        {popularPlaces.map((place, index) => (
          <div className="popular-card" key={index}>
            <div
              className="popular-card-image"
              style={{
                backgroundImage: `url(${place.image})`,
              }}
            >
              <div className="popular-card-title">{place.title}</div>
            </div>
            <div className="popular-card-content">
              <p className="popular-card-description">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCards;

