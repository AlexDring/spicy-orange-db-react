/* eslint-disable react/prop-types */
import { RecommendationCardSmall } from 'components/cards'
import Skeleton from 'components/skeleton/skeleton'
import styled from 'styled-components'

const MediaPosterGridStyles = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(180px, 1fr));
grid-auto-rows: 1fr;
@media (max-width: 500px) {
  grid-template-columns: 1fr 1fr;
}
grid-gap: 15px;
margin-top: 30px;
`

const RecommendationsSmallGrid = ({ loading, recommendations, skeletonCount }) => {
  return(
    <MediaPosterGridStyles>
      {loading ? 
        <Skeleton count={skeletonCount} component="recommendation-small" /> :
        recommendations?.map(recommendation => (
          <RecommendationCardSmall 
            key={recommendation._id} 
            recommendation={recommendation} 
          />
        ))
      }
    </MediaPosterGridStyles>
  )
}

export default RecommendationsSmallGrid