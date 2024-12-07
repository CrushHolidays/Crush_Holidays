import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log({
      rating,
      reviewTitle,
      reviewBody,
      userName,
      userEmail,
      checked
    });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Share Your Experience with Us: Leave a Review!</h2>
      
      <label>Your overall rating</label>
      <div className="star-rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} onClick={() => setRating(index + 1)}>
            {rating > index ? '★' : '☆'}
          </span>
        ))}
      </div>
      
      <label>Title of your review</label>
      <input
        type="text"
        value={reviewTitle}
        onChange={(e) => setReviewTitle(e.target.value)}
        placeholder="Summarize your review or highlight an interesting detail."
      />
      
      <label>Your review</label>
      <textarea
        value={reviewBody}
        onChange={(e) => setReviewBody(e.target.value)}
        placeholder="Tell people your review."
      />
      
      <label>Your name</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Tell us your name."
      />
      
      <label>Your email</label>
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Tell us your email."
      />
      
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        This review is based on my own experience and is my genuine opinion.
      </label>
      
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
