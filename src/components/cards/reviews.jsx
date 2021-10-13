/* eslint-disable react/prop-types */
import Skeleton from 'components/skeleton/skeleton'
import styled from 'styled-components'
import ReviewCard from './review-card'

const ReviewGridStyles = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-gap: 24px;
align-items: baseline;
`

const Reviews = ({ loading, reviews, large }) => {
  return(
    <ReviewGridStyles>
      {loading ? 
        <Skeleton number={8} component="review" /> : 
        reviews.map(review => (
          <ReviewCard 
            key={review._id} 
            review={review}   
            large={large}
          />
        ))
      }
    </ReviewGridStyles>
  )
}

export default Reviews