import { ReviewCard } from 'components/cards'
import Section from 'components/layout/section'
import { Loading } from 'components/lib'
import Skeleton from 'components/skeleton/skeleton'
import { useParams } from 'react-router'
import { ReviewGridStyles } from '../styles/grids'
import { useProfileReviews } from 'utils/profile'

const ProfileReviews = () => {
  const {userId} = useParams()
  const { isLoading, reviews } = useProfileReviews(userId)
  const username = reviews?.length > 0 ? `${reviews[0].user}'s` : null
  return(
    <Section>
      <h1>{isLoading ? <Loading /> : username} Reviews</h1>
      <ReviewGridStyles>
        {isLoading ? 
          <Skeleton count={12} component="review" /> : 
          reviews.map(review => (
            <ReviewCard 
              key={review._id} 
              review={review}   
              large
            />
          ))
        }
      </ReviewGridStyles>
    </Section>
  )
}

export default ProfileReviews