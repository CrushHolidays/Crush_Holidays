import React, { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import './HomePage.css';  
  
const CardPage = () => {  
   const [packages, setPackages] = useState([]);  
   const navigate = useNavigate();  
   // fetch("http://localhost:7000/api/v1/Packages/get-packages")  
   useEffect(() => {  
      fetch("https://crush-holidays-backend.onrender.com/api/v1/Packages/get-packages")  
        .then((response) => response.json())  
        .then((data) => {  
           setPackages(data.data.packages);  
        })  
        .catch((error) => console.error("Error fetching packages:", error));  
   }, []);  
  
   const handleCardClick = (id) => {  
      navigate(`/packages/${id}`);  
   };  
  
   const handleWhatsAppClick = (phoneNumber, message) => {
      const sanitizedNumber = phoneNumber.replace(/\s+/g, '').replace(/[^0-9]/g, '');
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;
      
      window.open(whatsappURL, '_blank');
  };
  
   return (  
      <div className='destination-page'>  
        <h1 className="home-page-title">OUR PACKAGES</h1>  
        <div className="home-page">  
           {packages.map((pkg) => (  
              <div  
                key={pkg._id}  
                className="card"  
                onClick={() => handleCardClick(pkg._id)}  
              >  
                <div className="image-container">  
                   <img  
                      src={JSON.parse(pkg.Image_url[0])[0]}  
                      alt={pkg.Package_name}  
                      className="card-image"  
                   />  
                   <span className="price-badge">₹{pkg.Price - pkg.Discount}</span>  
                </div>  
                <div className="card-content">  
                   <h3>{pkg.Package_name.replace(/\"/g, "")}</h3>  
                   <div className="price">  
                      <span className="adventure-cost">  
                        Adventure Cost: <span className="original-price">₹{pkg.Price}</span>  
                      </span>  
                      <span className="discount-price">Discount: ₹{pkg.Price - pkg.Discount}</span>  
                   </div>  
                   <p className="packages">Duration: {pkg.Duration} days</p>  
                   <p className="highlights">Highlight: {pkg.Highlight.replace(/\"/g, "")}</p>  
                </div>  
                <div className="button-container">
                   <button  
                      className="whatsapp-button"  
                      onClick={(e) => {
                         e.stopPropagation();
                         handleWhatsAppClick('+919611001991', `Hello, I am interested in this: ${pkg.Package_name}`);
                      }}  
                   >
                      Contact on WhatsApp
                   </button>
                </div>
              </div>  
           ))}  
        </div>  
      </div>  
   );  
};  
  
export default CardPage;










