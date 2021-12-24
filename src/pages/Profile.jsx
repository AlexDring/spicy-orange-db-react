import { ReviewCard } from 'components/cards'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import Section from 'components/layout/section'
import Skeleton from 'components/skeleton/skeleton'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { ReviewGridStyles } from 'styles/grids'
import { useGetProfile } from 'utils/profile'
import spicyLogo from 'assets/images/spicy-orange-logo.png'
import EmptyPlaceholder from 'components/empty-placeholder'
import rottenIcons from 'assets/images/rotten-gas/rottenIcons'

const ProfileStyles = styled.div`
  display: flex;
  img {
    margin-right: 10px;
  }
`

const Profile = () => {
  const {userId} = useParams()
  const { profile, isLoading } = useGetProfile(userId)
  return(
    <>
      <Section>
        <ProfileStyles>
          <img width={40} height={40} src={profile?.avatar ? profile?.avatar : spicyLogo} alt="" />
          <h1 className='capitalise'>{profile?.username}</h1>
        </ProfileStyles>
        <h2 className='capitalise'>{profile?.username}&apos;s Recent Recommendations</h2>
        {profile?.recommendations.length === 0 ?  
          <EmptyPlaceholder
            icon={<img src={rottenIcons.noReview} />}
            text={<p>No reviews.</p>} />
          :
          <RecommendationsGrid
            loading={isLoading}
            recommendations={profile?.recommendations}
            skeletonCount={6}
          /> 
        }
        
      </Section>
      <Section orange>
        <h2 className='capitalise'>{profile?.username}&apos;s Recent Reviews</h2>
        <ReviewGridStyles>
          {profile?.recommendations.length === 0 ?  
            <EmptyPlaceholder
              icon={<img src={rottenIcons.noReview} />}
              text={<p>No recommendations</p>} />
            :
            (isLoading ? 
              <Skeleton count={12} component="review" /> : 
              profile?.reviews.map(review => (
                <ReviewCard 
                  key={review._id} 
                  review={review}   
                  large
                />
              ))) 
          }
        </ReviewGridStyles>
      </Section>
    </>
  )
}

export default Profile