import React, { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import Average from './Average';

const Form = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [feedbacks, setFeedbacks] = useState([]); 

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || review.trim() === '') {
      alert('Please select a rating and write a review.');
      return;
    }

    const newFeedback = { rating, review };
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]); 
    setRating(0);
    setReview('');
  };


    const handleDelete = ( position ) =>{
    const updatedFeed = feedbacks.filter((_, index) => index !== position);
    setFeedbacks(updatedFeed);

  };

  const AverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const totalRating = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
    return (totalRating / feedbacks.length).toFixed(1);
  };

  return (
    <div className='container'>
      <div className='card'>
        <h2>How would you rate your service with us?</h2>
        <ul className='rating'>
          {[...Array(10)].map((_, index) => (
            <li
              key={index}
              className={rating === index + 1 ? 'selected' : ''}
              onClick={() => handleRatingClick(index + 1)}
              style={{ cursor: 'pointer' }} 
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className='input input-group'
            placeholder='Write a review'
            value={review}
            onChange={handleReviewChange}
          />
          <button className='btn btn-primary' type="submit">Submit </button>
        </form>
      </div>
      <Average averageRating={AverageRating()} totalReviews={feedbacks.length}/>
      
      <div className="feedback-list">
        {feedbacks.length === 0 ? (
          <p>No feedback submitted yet.</p>
        ) : (
          feedbacks.map((feedback, index) => (
            <FeedbackCard key={index} rating={feedback.rating} review={feedback.review} onDelete={() => handleDelete(index)}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Form;
