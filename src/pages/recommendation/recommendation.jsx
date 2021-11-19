import styled from 'styled-components'
import { useParams } from 'react-router'
import { useRecommendation, useRemoveRecommendation } from 'utils/recommendations'
import { PropTypes } from 'prop-types'
import Section from 'components/layout/section'
import Breadcrumbs from 'components/layout/navigation/breadcrumbs'
import WatchlistToggle from './components/watchlist-toggle'
import { RecommendationDetailSkeleton, RecommendationInfoSkeleton } from 'components/skeleton/skeleton-templates'
import RecommendationMeta from './components/recommendation-meta'
import RottenReviews from './components/rotten-reviews'
import ThirdPartyReviews from './components/third-party-review'
import RecommendationInformation from './components/recommendation-information'
import ReviewsGrid from 'components/cards/grids/review-grid'
import rottenIcon from 'assets/images/rotten-gas/rottenIcons'
import EmptyPlaceholder from 'components/empty-placeholder'

const TopRowWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
  margin-bottom: 10px;
`

const RecommendationCardWrapper = styled.div`
  display: grid;
  border: 1px solid var(--light-gray);
  background: white;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
        "poster meta"
        "poster rottenGas"
        "poster reviews";
  > img {
    width: 100%;
    /* min-width: 300px; */
    height: 100%;
    object-fit: cover;
    grid-area: poster;
  }
  @media (max-width: 450px){
    grid-template-columns: 100% 1fr;
    grid-template-rows: auto auto auto;
    grid-column-gap: 0;
    grid-template-areas:
      "meta meta"
      "reviews reviews"
      "rottenGas rottenGas";
    > ul {
      margin-top: 16px;
    }
    > img {
      display: none;
    }
  }
`

function Recommendation() {
  const {id} = useParams()
  const {recommendation, isLoading} = useRecommendation(id)
  const remove = useRemoveRecommendation()

  if(isLoading) {
    return (
      <Section>
        <RecommendationDetailSkeleton />
        <RecommendationInfoSkeleton />
      </Section>
    )
  } 
  return(
    <>
      <Section>
        <TopRowWrapper>
          <Breadcrumbs routes={[
            { path: '/',
              breadcrumb: 'Home' 
            },
            { path: '/recommendations',
              breadcrumb: 'Recommendations' 
            },
            { path: `/recommendation/${recommendation._id}`,
              breadcrumb: `${recommendation.Title}` 
            }
          ]} />
          <WatchlistToggle recommendationId={recommendation._id} />
        </TopRowWrapper>
        <RecommendationCardWrapper> 
          <img
            src={recommendation.Poster}
            alt={`${recommendation.Title} poster`}   
          />
          <RecommendationMeta
            recommendation={recommendation}
            remove={remove}   
          />
          <RottenReviews
            recommendation={recommendation}
            loading={isLoading}   
          />
          <ThirdPartyReviews recommendation={recommendation} />
        </RecommendationCardWrapper>
        <RecommendationInformation recommendation={recommendation} />
      </Section>
      <Section orange>
        <h2 id='rotten-gas'>Rotten Ga&apos;s</h2>
        {recommendation.mediaDetail.rottenReviews.length === 0 ?
          <EmptyPlaceholder
            icon={<img src={rottenIcon.noReview} />}
            text={<p>No reviews.</p>} />
          :
          <ReviewsGrid
            loading={isLoading}
            reviews={recommendation.mediaDetail.rottenReviews} 
            skeletonCount={4} 
          />}
      </Section>
    </>
  )
}

Recommendation.propTypes = {
  user: PropTypes.object
}

export default Recommendation