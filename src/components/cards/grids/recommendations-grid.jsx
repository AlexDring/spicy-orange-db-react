import RecommendationCard from 'components/cards/recommendation-card'
import Skeleton from 'components/skeleton/skeleton'
import { MediaCardGridStyles } from 'styles/grids'
import PropTypes from 'prop-types'

const RecommendationsGrid = ({ loading, recommendations, skeletonCount }) =>  {
  return (
    <MediaCardGridStyles>
      {loading ? 
        <Skeleton count={skeletonCount} component="recommendation" /> :
        recommendations?.map(recommendation => (
          <RecommendationCard 
            key={recommendation._id} 
            recommendation={recommendation.recommendationId ? recommendation.recommendationId : recommendation} // watchlist populates data.recommendationId
          />
        ))}
    </MediaCardGridStyles>
  )}

RecommendationsGrid.propTypes = {
  loading: PropTypes.bool,
  recommendations: PropTypes.array,
  skeletonCount: PropTypes.number,
}

export default RecommendationsGrid