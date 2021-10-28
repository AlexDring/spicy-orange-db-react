/* eslint-disable react/prop-types */
import { RecommendationCardSmall, RecommendationPosterCard } from 'components/cards'
import Skeleton from 'components/skeleton/skeleton'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RecommendationsPosterGridStyles = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(180px, 1fr));
/* grid-auto-rows: 1fr; */
@media (max-width: 500px) {
  grid-template-columns: 1fr 1fr;
}
grid-gap: 15px;
margin-top: 15px;
`

const RecommendationsPosterGrid = ({ loading, recommendations, skeletonCount }) => {
  return(
    <RecommendationsPosterGridStyles>
      {loading ? 
        <Skeleton count={skeletonCount} component="recommendation-small" /> :
        recommendations?.map(recommendation => (
          <Link key={recommendation._id} to={'/recommendation/' + recommendation._id} >
            <RecommendationPosterCard 
              data={recommendation} 
            />
          </Link>
        ))
      }
    </RecommendationsPosterGridStyles>
  )
}

export default RecommendationsPosterGrid