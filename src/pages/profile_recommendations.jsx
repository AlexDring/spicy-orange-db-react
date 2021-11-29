import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import Section from 'components/layout/section'
import { useParams } from 'react-router'
import { useProfileRecommendations } from 'utils/profile'

const ProfileRecommendations = () => {
  const {userId} = useParams()
  const { isLoading, recommendations } = useProfileRecommendations(userId)
  console.log(recommendations)
  return(
    <Section>
      <h1>My Recommendations</h1>
      <RecommendationsGrid
        loading={isLoading}
        recommendations={recommendations}
        skeletonCount={8} />
    </Section>
  )
}

export default ProfileRecommendations