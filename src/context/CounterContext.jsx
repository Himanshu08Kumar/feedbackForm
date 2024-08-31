import { useState, createContext } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) =>{
    const [feedbacks, setFeedbacks] = useState([
        {
            id: 1,
            review: 'This is custom feedback 1',
            rating: 10,
          },
          {
            id: 2,
            review: 'This is custom feedback 2',
            rating: 9,
          },
          {
            id: 3,
            review: 'This is custom feedback 3',
            rating: 7,
          },
    ]);

    const addFeedback = (newFeedback) => {
      setFeedbacks((prevFeedbacks) => [newFeedback, ...prevFeedbacks]);
    };
  
    const deleteFeedback = (position) => {
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.filter((_, index) => index !== position)
      );
    };

    const averageRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) /
          feedbacks.length
        ).toFixed(1)
      : 0;

  const totalReviews = feedbacks.length;

    return(
        <CounterContext.Provider value={{ 
            feedbacks, 
            setFeedbacks,
            addFeedback,
            deleteFeedback,
            averageRating,
            totalReviews
             }}>
            { children }
        </CounterContext.Provider>
    )
}

export {CounterContext, CounterProvider}