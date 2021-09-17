import { useQuery } from 'react-query'
import reviewService from '../services/reviews'
import ReviewGridStyles from '../styles/Grids'
import Review from './Review'

const ReviewList = () => {
  const { 
    data: reviews, 
    isLoading
  } = useQuery({
    queryKey: 'reviews',
    queryFn: () => reviewService.getAllReviews().then(data => data)
  })


  // if(!reviews) {
  //   return null
  // }
  return(
    <ReviewGridStyles>
      {isLoading ? null : reviews.map(review => (
        <Review large='true' key={review._id} review={review} />
      ))}
    </ReviewGridStyles>
  )
}

export default ReviewList