import React from "react";
import { FaStar } from "react-icons/fa"; // Import React Icons for stars
import "./MarqueeDemo.css";
// import ReviewForm from "./ReviewForm";

const reviews = [
  { name: "Jack", username: "@jack", body: "I've never seen anything like this before. It's amazing. I love it.", img: "https://avatar.vercel.sh/jack", rating: 5 },
  { name: "Jill", username: "@jill", body: "I don't know what to say. I'm speechless. This is amazing.", img: "https://avatar.vercel.sh/jill", rating: 4 },
  { name: "John", username: "@john", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/john", rating: 4 },
  { name: "Jane", username: "@jane", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jane", rating: 5 },
  { name: "Jenny", username: "@jenny", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jenny", rating: 3 },
  { name: "James", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james", rating: 4 },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, rating }) => {
  return (
    <div>
    {/* <ReviewForm/> */}
    <figure className="review-card">
      <div className="review-header">
        <img className="review-avatar" src={img} alt="" />
        <div className="review-info">
          <figcaption className="review-name">{name}</figcaption>
          <p className="review-username">{username}</p>
        </div>
      </div>
      <blockquote className="review-body">{body}</blockquote>
      <div className="review-rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            size={20}
            color={index < rating ? "gold" : "lightgray"}
          />
        ))}
      </div>
    </figure>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="marquee-container">
      <div className="marquee" style={{ animationDuration: "20s" }}>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="marquee reverse" style={{ animationDuration: "20s" }}>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </div>
      <div className="marquee-gradient left"></div>
      <div className="marquee-gradient right"></div>
    </div>
  );
}


export default MarqueeDemo





