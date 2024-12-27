import React from 'react';
import './PopularCards.css';

const PopularCards = () => {
  const popularPlaces = [
    {
      title: 'MYSORE',
      description: "Mysore, often referred to as the 'City of Palaces,' is a mesmerizing destination in Karnataka that exudes royal charm and cultural richness. Known for its splendid architecture, the city is home to the iconic Mysore Palace, a masterpiece of Indo-Saracenic design. Mysore's vibrant heritage comes alive during the famous Dasara Festival, a grand celebration filled with processions, lights, and cultural performance Mysore is also a paradise for nature lovers, with its serene lakes, and scenic hills offering a peaceful retreat. ",
      image: 'https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg',
    },
    {
      title: 'Kerala',
      description: 'Kerala, often called "God’s Own Country," is a breathtakingly beautiful state in southern India, celebrated for its serene landscapes and vibrant culture. Known for its lush green backwaters, pristine beaches, and rolling tea plantations, Kerala offers a tranquil escape into natures lap. The region is also famous for its rich cultural heritage, with traditional dance forms, music, and art that reflect the state’s vibrant history. Kerala’s warm hospitality and delicious cuisine make it a must-visit destination for travelers .',
      image: 'https://ihplb.b-cdn.net/wp-content/uploads/2021/09/kerala-in-october-kollam-header-675x430.jpg',
    },
    {
      title: 'Coorg',
      description: "Coorg, located in Karnataka’s Western Ghats, is a beautiful destination that attracts nature lovers and adventure enthusiasts. With its stunning landscapes of lush green forests, rolling hills, and flowing rivers, Coorg is like a paradise. The region is famous for its vast coffee plantations, filling the air with a delightful aroma. Its rich cultural heritage and warm hospitality make it a timeless sanctuary for those seeking tranquility and natural beauty.  offering a perfect blend of adventure and relaxation.",
      image: 'https://static.toiimg.com/thumb/47068905.cms?resizemode=75&width=1200&height=900',
    },
    {
      title: 'Sakleshpur',
      description: 'Sakleshpur, nestled in Karnataka’s Western Ghats, is a scenic hill station that draws nature lovers and adventurers alike. Surrounded by lush coffee plantations, misty hills, and cascading waterfalls, Sakleshpur offers a serene escape into nature. The region’s spice estates fill the air with a soothing aroma, creating an inviting ambiance. Its tranquil charm, combined with thrilling trekking trails and historical landmarks, makes Sakleshpur a hidden gem for travelers seeking peace and adventure..',
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

