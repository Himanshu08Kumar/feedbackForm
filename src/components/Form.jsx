import React, { useContext, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import Average from "./Average";
import { CounterContext } from "../context/CounterContext";

const Form = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const { addFeedback, deleteFeedback, feedbacks } = useContext(CounterContext);

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || review.trim() === "") {
      alert("Please select a rating and write a review.");
      return;
    }

    const newFeedback = { rating, review };
    addFeedback(newFeedback);
    setRating(0);
    setReview("");
  };
  
  return (
    <div className="container">
      <div className="card">
        <h2>How would you rate your service with us?</h2>
        <ul className="rating">
          {[...Array(10)].map((_, index) => (
            <li
              key={index}
              className={rating === index + 1 ? "selected" : ""}
              onClick={() => handleRatingClick(index + 1)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  rating === index + 1 ? "#ff6a95" : "transparent",
              }}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input input-group"
            placeholder="Write a review"
            value={review}
            onChange={handleReviewChange}
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>

      <Average  />
      
      <div className="feedback-list">
        {feedbacks.length === 0 ? (
          <p>No feedback submitted yet.</p>
        ) : (
          feedbacks.map((feedback, index) => (
            <FeedbackCard
              key={index}
              rating={feedback.rating}
              review={feedback.review}
              onDelete={() => deleteFeedback(index)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Form;
