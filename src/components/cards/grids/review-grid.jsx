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

// eslint-disable-next-line react/prop-types
const ReviewsGrid = ({ loading, reviews, large, skeletonCount, setDownloadData }) => (
  <ReviewGridStyles>
    {loading ? 
      <Skeleton count={skeletonCount} component="review" /> : 
      reviews?.map(review => (
        <ReviewCard 
          setDownloadData={setDownloadData}
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