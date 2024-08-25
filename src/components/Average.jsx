import React from 'react'

const Average = ({averageRating, totalReviews}) => {
  return (
    <div className=' feedback-stats1'>
      <span>{totalReviews} Rating</span>
      <span>Average Reviews: {averageRating}</span>
    </div>
  )
}

export default Average
