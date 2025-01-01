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
      const response = await axios.post('https://crush-holidays-backend.onrender.com/api/v1/Feedback/new', {
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
    <div className='main'>
      < div className='header'>
        <h1>Submit a Review</h1>
      </div>
          <div className="review-form">
      {/* Left Section (Form) */}
      <div className="form-content">
        <h2>Share Your Experience with Us: Leave a Review!</h2>

        {error && <p className="error-message">{error}</p>}

        <label>Your overall rating</label>
        <div className="star-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              onClick={() => setRating(index + 1)}
              className={rating > index ? 'selected' : ''}
            >
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

        <button type="submit" disabled={loading} onClick={handleSubmit}>
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </div>

      {/* Right Section (Images) */}
      <div className="image-section">
        <img
          src="https://www.stayvista.com/blog/wp-content/uploads/2024/07/abhishek-prasad-N3VzleBhOvk-unsplash-1024x684.jpg"
          alt="Review 1"
        />
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/78/89/d4/sunset-time-in-chinese.jpg?w=500&h=400&s=1"
          alt="Review 2"
        />
      </div>
    </div>
    </div>
  );
};

export default ReviewForm;
