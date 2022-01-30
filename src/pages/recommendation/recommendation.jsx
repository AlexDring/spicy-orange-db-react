import styled from 'styled-components'
import { useParams } from 'react-router'
import { useRecommendation, useRemoveRecommendation } from 'utils/recommendations'

import Section from 'components/layout/section'
import Breadcrumbs from 'components/layout/navigation/breadcrumbs'
import { RecommendationDetailSkeleton, RecommendationInfoSkeleton } from 'components/skeleton/skeleton-templates'
import EmptyPlaceholder from 'components/empty-placeholder'

import WatchlistToggle from './components/watchlist-toggle'
import RecommendationMeta from './components/recommendation-meta'
import RottenReviews from './components/rotten-reviews'
import ThirdPartyReviews from './components/third-party-review'
import RecommendationInformation from './components/recommendation-information'
import DownloadReview from './components/download-review'

import { useState } from 'react'
import Skeleton from 'components/skeleton/skeleton'
import { ReviewCard } from 'components/cards'
import {ReviewGridStyles} from 'styles/grids'
import rottenIcons from 'assets/images/rotten-gas/rottenIcons'

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
  const [downloadData, setDownloadData] = useState()
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
        {downloadData && 
          <DownloadReview
            review={downloadData}
            recommendation={recommendation}
            setDownloadData={setDownloadData}
          />}
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
        <ReviewGridStyles>
          {!recommendation.rottenReviews.length && 
          <EmptyPlaceholder
            icon={<img src={rottenIcons.noReview} />}
            text={<p>No reviews.</p>} />
          }
          {recommendation.rottenReviews.length && 
            isLoading 
            ? <Skeleton count={4} component="review" />
            : recommendation.rottenReviews?.map(review => (
              <ReviewCard 
                setDownloadData={setDownloadData}
                key={review._id} 
                review={review}   
              />))}
        </ReviewGridStyles>
      </Section>
    </>
  )
}

export default Recommendation