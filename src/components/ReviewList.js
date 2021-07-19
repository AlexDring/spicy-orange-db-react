import { useEffect, useState } from 'react'
import reviewRouter from '../services/reviews'
import ReviewGridStyles from '../styles/Grids'
import Review from './Review'

const ReviewList = () => {
  const [reviews, setReviews] = useState(null)

  useEffect(async () => {
    const response = await reviewRouter.getAllReviews()
    setReviews(response)
  }, [setReviews])

  if(!reviews) {
    return null
  }
  return(
    <ReviewGridStyles>
      {reviews.map(review => (
        <Review large='true' key={review._id} review={review} />
      ))}
    </ReviewGridStyles>
  )
}

export default ReviewList