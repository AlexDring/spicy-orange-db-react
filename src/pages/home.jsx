import Section from 'components/layout/section'
import { useRecommendations } from 'utils/recommendations'
import { useReviews } from 'utils/reviews'
import ReviewsGrid from 'components/cards/grids/review-grid'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import RecommendationsSmallGrid from 'components/cards/grids/recommendations-small-grid'

function Home() {
  const { data, isLoading: recommendationsLoading } = useRecommendations()
  const {reviews, isLoading: reviewsLoading} = useReviews()
  console.log(reviews?.reviews)

  const highlightedRecommendations = data?.pages[0].recommendations.slice(0, 4)
  const remainingRecommendations = data?.pages[0].recommendations.slice(4) 

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
        <ReviewsGrid
          loading={reviewsLoading}
          reviews={reviews?.reviews}
          skeletonCount={12}
          large 
        />
      </Section>
    </>
  )
}

export default Home