import React from 'react';
import './PopularCards.css';
const PopularCards = () => {

  const popularPlaces = [
    {
      title: 'OOTY',
      description:
        "Ooty, also known as Udhagamandalam, is a charming hill station in Tamil Nadu, often referred to as the 'Queen of Hill Stations.' Nestled in the Nilgiri Hills, Ooty is renowned for its picturesque landscapes, lush tea gardens, and colonial-era architecture. The town offers a tranquil retreat with its serene lakes, vibrant botanical gardens, and the iconic Nilgiri Mountain Railway. Ooty’s pleasant climate and breathtaking views make it a favorite destination for nature lovers, honeymooners, and anyone seeking a peaceful escape.",
      image:
        'https://img.cdn.zostel.com/blog_photo/old/botanical_garden_6SOT8IV.jpg',
    },
    {
      title: 'CHIKMAGALUR',
      description:
        "Chikmagalur, located in Karnataka, is a serene hill station celebrated for its sprawling coffee plantations and misty landscapes. A haven for coffee enthusiasts and nature lovers alike, the region offers aromatic estates, trekking trails, and spectacular views of the Western Ghats. With its cascading waterfalls and abundant wildlife sanctuaries, Chikmagalur perfectly balances adventure and relaxation. Its rich history and calm ambiance make it an ideal getaway for those looking to experience nature and heritage in harmony.",
      image:
        'https://mediaim.expedia.com/destination/2/c2227fccaa5d9c368c44ef73d8a207cd.jpg',
    },
    {
      title: 'COORG',
      description:
        "Coorg, also known as Kodagu, is a picturesque hill station in Karnataka famed for its lush coffee estates, rolling hills, and soothing ambiance. The region dazzles visitors with mist-covered mountains, cascading waterfalls, and vibrant greenery that creates a serene escape for both nature enthusiasts and adventure seekers. Home to ancient temples, diverse wildlife, and a rich cultural heritage, Coorg offers a delightful blend of scenic beauty and tradition. Whether it’s trekking scenic trails or enjoying an aromatic coffee tour, Coorg promises an unforgettable experience.",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDzn7JZ3PrLD50TRloq2jee6wFvyRvM6d0g&s',
    },
    {
      title: 'WAYANAD',
      description:
        "Wayanad, located in Kerala, is a captivating hill station renowned for its lush greenery, pristine waterfalls, and deep-rooted cultural heritage. The region is adorned with sprawling spice plantations, ancient caves, and scenic trekking trails that lure adventure seekers and nature lovers alike. With its diverse wildlife sanctuaries, tranquil lakes, and vibrant local traditions, Wayanad offers a unique fusion of natural splendor and cultural charm. It is an ideal destination for those wishing to immerse themselves in Kerala’s rich and vibrant landscape.",
      image:
        'https://i0.wp.com/www.orientalschool.com/wp-content/uploads/2023/04/a-view-of-tea-gardens-OG-1199x627-1.png?fit=1199%2C627&ssl=1',
    },
    {
      title: 'MYSORE',
      description:
        "Mysore, famously known as the 'City of Palaces,' is a historic jewel in Karnataka that seamlessly blends royal grandeur with vibrant modernity. Renowned for the magnificent Mysore Palace, the city enchants visitors with its intricate architecture, illuminated festivals like Dasara, and centuries-old traditions in art, music, and cuisine. Beyond the palace, Mysore boasts lush gardens, bustling bazaars, and museums that echo its storied past. This enchanting destination offers a delightful journey through history, culture, and contemporary charm.",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg',
    },
    {
      title: 'SAKLESHPUR',
      description:
        "Sakleshpur, nestled in the lush Western Ghats of Karnataka, is a serene hill station celebrated for its verdant coffee estates, rolling hills, and pristine natural beauty. This charming destination offers an abundance of adventure with scenic trekking trails, ancient forts, and cascading waterfalls that accentuate its landscape. Rich in biodiversity and steeped in local traditions, Sakleshpur provides a tranquil escape into nature. Its cool climate and rustic charm make it the perfect retreat for travelers seeking both relaxation and an authentic taste of rural Karnataka.",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR614dpLL100oQIHMx05Cbwn9w36Ww8Y8aWBQ&s',
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

