import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Average = () => {
  const {averageRating, totalReviews} = useContext(CounterContext)
  return (
    <div className=' feedback-stats1'>
      <span>{totalReviews} Rating</span>
      <span>Average Reviews: {averageRating}</span>
    </div>
  )
}

export default Average
