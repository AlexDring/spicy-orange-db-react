import styled from 'styled-components'
import { useState } from 'react'
import { useParams } from 'react-router'
import { useRecommendation, useRemoveRecommendation } from 'utils/recommendations'
import { PropTypes } from 'prop-types'

import Section from 'components/layout/section'
import Breadcrumbs from 'components/breadcrumbs'
import WatchlistToggle from './components/watchlist-toggle'
import { MediaDetailSkeleton } from 'components/skeleton/skeleton-templates'
import RecommendationMeta from './components/recommendation-meta'
import RottenReviews from './components/rotten-reviews'
import ThirdPartyReviews from './components/third-party-review.'
import RecommendationInformation from './components/recommendation-information'
import Reviews from 'components/cards/reviews'
import Modal from 'components/modals/Modal'
import RottenReviewModal from 'components/modals/RottenReviewModal'


const TopRowWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
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
    height: 100%;
    object-fit: cover;
    grid-area: poster;
  }
  @media (max-width: 600px){
    grid-template-columns: 150px 1fr;
    grid-template-rows: auto auto auto;
    grid-column-gap: 0;
    grid-template-areas:
      "poster meta"
      "poster reviews"
      "rottenGas rottenGas";
  }
`

function Recommendation({ user }) {
  const {id} = useParams()
  const {recommendation, isLoading} = useRecommendation(id)
  const remove = useRemoveRecommendation(user)

  if(isLoading) {
    return (
      <Section>
        <MediaDetailSkeleton />
      </Section>
    )
  } 
  return(
    <>
      <Section>
        <TopRowWrapper style={{'display': 'flex', 'justifyContent': 'space-between', 'flexWrap': 'wrap'}}>
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
          <WatchlistToggle user={user} recommendation_id={recommendation._id} />
        </TopRowWrapper>
        <RecommendationCardWrapper> 
          <img src={recommendation.Poster} alt={`${recommendation.Title} poster`} />
          <RecommendationMeta user={user} recommendation={recommendation} remove={remove} />
          <RottenReviews user={user} recommendation={recommendation} />
          <ThirdPartyReviews recommendation={recommendation} />
        </RecommendationCardWrapper>
        <RecommendationInformation recommendation={recommendation} />
      </Section>
      <Section id='rottenGas' orange>
        <h2>Rotten Ga&apos;s</h2>
        <Reviews loading={isLoading} reviews={recommendation.mediaDetail.rottenReviews} />
      </Section>
    </>
  )
}

Recommendation.propTypes = {
  user: PropTypes.object
}

export default Recommendation