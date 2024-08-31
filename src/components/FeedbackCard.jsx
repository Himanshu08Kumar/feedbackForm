import React from 'react'
import { FaTimes} from 'react-icons/fa'

const FeedbackCard = ({ rating, review , onDelete}) => {

  return (
    <div className="card feedback-stats">
      <span className='num-display'>{rating}</span>
      <span >{review}</span>
      <FaTimes className='close' onClick={onDelete}/>
    </div>
  )
}

export default FeedbackCard;
