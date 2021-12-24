import { ReviewCard } from 'components/cards'
import Section from 'components/layout/section'
import { Loading } from 'components/lib'
import Skeleton from 'components/skeleton/skeleton'
import { useParams } from 'react-router'
import { ReviewGridStyles } from '../styles/grids'
import { useProfileReviews } from 'utils/profile'
import rottenIcons from 'assets/images/rotten-gas/rottenIcons'
import EmptyPlaceholder from 'components/empty-placeholder'

const ProfileReviews = () => {
  const {userId} = useParams()
  const { isLoading, reviews } = useProfileReviews(userId)
  const username = reviews?.length > 0 ? `${reviews[0].user}'s` : ''
  return(
    <Section>
      <h1 className='capitalise'>{isLoading ? <Loading /> : username} Reviews</h1>
      <ReviewGridStyles>
        {reviews?.length === 0 ? 
          <EmptyPlaceholder
            icon={<img src={rottenIcons.noReview} />}
            text={<p>No recommendations</p>} /> 
          : (
            isLoading ? 
              <Skeleton count={12} component="review" /> : 
              reviews.map(review => (
                <ReviewCard 
                  key={review._id} 
                  review={review}   
                  large
                />
              ))
          )}
      </ReviewGridStyles>
    </Section>
  )
}

export default ProfileReviews