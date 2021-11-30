import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import Section from 'components/layout/section'
import { Loading } from 'components/lib'
import { useParams } from 'react-router'
import { useProfileRecommendations } from 'utils/profile'

const ProfileRecommendations = () => {
  const {userId} = useParams()
  const { isLoading, recommendations } = useProfileRecommendations(userId)
  const username = recommendations?.length > 0 ? `${recommendations[0].user}'s` : null

  return(
    <Section>
      <h1>{isLoading ? <Loading /> : `${username} Recommendations`} </h1>
      <RecommendationsGrid
        loading={isLoading}
        recommendations={recommendations}
        skeletonCount={8} />
    </Section>
  )
}

export default ProfileRecommendations