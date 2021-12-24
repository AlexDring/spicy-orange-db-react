import Skeleton from 'components/skeleton/skeleton'
import styled from 'styled-components'
import ReviewCard from '../review-card'
import PropTypes from 'prop-types'

const ReviewGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 24px;
  align-items: center;
`

const ReviewsGrid = ({ loading, reviews, large, skeletonCount }) => (
  <ReviewGridStyles>
    {loading ? 
      <Skeleton count={skeletonCount} component="review" /> : 
      reviews?.map(review => (
        <ReviewCard 
          key={review._id} 
          review={review}   
          large={large}
        />
      ))
    }
  </ReviewGridStyles>
)

ReviewsGrid.propTypes = {
  loading: PropTypes.bool,
  reviews: PropTypes.array,
  large: PropTypes.bool,
  skeletonCount: PropTypes.number,
}


export default ReviewsGrid