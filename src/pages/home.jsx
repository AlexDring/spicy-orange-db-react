import Section from 'components/layout/section'
import { useRecommendations } from 'utils/recommendations'
import { useReviews } from 'utils/reviews'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import RecommendationsSmallGrid from 'components/cards/grids/recommendations-poster-grid'
import { ReviewGridStyles } from '../styles/grids'
import Skeleton from 'components/skeleton/skeleton'
import { ReviewCard } from 'components/cards'
import LoadMoreButton from 'components/load-more-button'

function Home() {
  const { data, isLoading: recommendationsLoading } = useRecommendations()
  const result = useReviews()

  const highlightedRecommendations = data?.pages[0]?.recommendations.slice(0, 4)
  const remainingRecommendations = data?.pages[0]?.recommendations.slice(4) 
  return(
    <>
      <Section>
        <h1>Recent Recommendations</h1>
        <RecommendationsGrid
          loading={recommendationsLoading}
          recommendations={highlightedRecommendations}
          skeletonCount={4}
        /> 
        <RecommendationsSmallGrid
          loading={recommendationsLoading}
          recommendations={remainingRecommendations}
          skeletonCount={8}
        />
      </Section>
      <Section orange>
        <h1>Recent Reviews</h1>
        <ReviewGridStyles>
          {result.loading ? 
            <Skeleton count={12} component="review" /> : 
            result.data?.pages.map(reviews => (
              reviews?.reviews.map(review => (
                <ReviewCard 
                  key={review._id} 
                  review={review}   
                  large
                />
              ))
            ))
          }
        </ReviewGridStyles>
        {result.isSuccess && <LoadMoreButton result={result} />}
      </Section>
    </>
  )
}

export default Home