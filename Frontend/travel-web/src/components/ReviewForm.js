import React, { useState } from 'react';
import axios from 'axios';
import './ReviewForm.css';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !reviewTitle || !reviewBody || !userName || !userEmail || !checked) {
      setError('All fields are required and the checkbox must be checked.');
      return;
    }

    setLoading(true);
    setError('');  // Clear any previous errors

    try {
      const response = await axios.post('http://localhost:7000/api/v1/Feedback/new', {
        rating,
        Title: reviewTitle,
        content: reviewBody,
        user_name: userName,
        email: userEmail,
      });

      // Optionally clear the form after submission
      setRating(0);
      setReviewTitle('');
      setReviewBody('');
      setUserName('');
      setUserEmail('');
      setChecked(false);

      alert('Review submitted successfully!');
    } catch (error) {
      console.log(error);
      setError(error.response ? error.response.data.message : 'Failed to submit review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Share Your Experience with Us: Leave a Review!</h2>

      {error && <p className="error-message">{error}</p>}

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

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
};

export default ReviewForm;
