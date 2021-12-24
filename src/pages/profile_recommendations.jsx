import rottenIcons from 'assets/images/rotten-gas/rottenIcons'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import EmptyPlaceholder from 'components/empty-placeholder'
import ItemCount from 'components/item-count'
import Breadcrumbs from 'components/layout/navigation/breadcrumbs'
import Section from 'components/layout/section'
import { Loading } from 'components/lib'
import { useParams } from 'react-router'
import { useProfileRecommendations } from 'utils/profile'

const ProfileRecommendations = () => {
  const {userId} = useParams()
  const { isLoading, recommendations } = useProfileRecommendations(userId)
  const username = recommendations?.length > 0 ? `${recommendations[0].user}'s` : ''

  return(
    <Section>
      <h1 className='capitalise'>{isLoading ? <Loading /> : `${username} Recommendations `}
        <ItemCount
          loading={isLoading}
          count={recommendations?.length}
          fontSize={'18px'} 
          background={'#FFB17A'}
        /></h1>
      {recommendations?.length === 0 ? 
        <EmptyPlaceholder
          icon={<img src={rottenIcons.noReview} />}
          text={<p>No recommendations</p>} /> 
        : <RecommendationsGrid
          loading={isLoading}
          recommendations={recommendations}
          skeletonCount={8} />
      }
      
    </Section>
  )
}

export default ProfileRecommendations