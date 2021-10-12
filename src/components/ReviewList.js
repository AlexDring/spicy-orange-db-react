import { ReviewGridStyles } from '../styles/grids'
import { useReviews } from '../utils/reviews'
import Review from './Review'

const ReviewList = () => {
  const {reviews, isLoading} = useReviews()

  return(
    <ReviewGridStyles>
      {isLoading ? null : reviews.map(review => (
        <Review large='true' key={review._id} review={review} />
      ))}
    </ReviewGridStyles>
  )
}

export default ReviewList