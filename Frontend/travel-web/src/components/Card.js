import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ image, title, path, price, discount, packages, highlights, rating, reviews }) => {
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(path)}>
            <img src={image} alt={title} className="card-image"/>
            <div className="card-content">
                <h3>{title}</h3>
                {/* <p className="price">
                    <span className="original-price">₹{price}</span>
                    <span className="discount-price">₹{price-discount}</span>
                </p> */}
                <p className="packages">Packages: {packages}</p>
                <ul className="highlights">
                    {highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
                {/* <div className="rating-reviews">
                    <span className="rating">⭐ {rating}</span>
                    <span className="reviews">{reviews} reviews</span>
                </div> */}
            </div>
        </div>
    );
};

export default Card;


