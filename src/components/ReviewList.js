import { useSelector } from 'react-redux'
import { selectAllReviews } from '../reducers/reviewSlice'
import ReviewGridStyles from '../styles/Grids'
import Review from './Review'

const ReviewList = () => {
  // const [reviews, setReviews] = useState(null)
  const reviews = useSelector(selectAllReviews)

  // useEffect(async () => {
  //   const response = await reviewRouter.getAllReviews()
  //   setReviews(response)
  // }, [setReviews])
  console.log(reviews)

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