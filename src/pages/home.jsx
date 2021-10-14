import Section from 'components/layout/section'
import { RecommendationCard, RecommendationCardSmall, ReviewCard } from 'components/cards'
import Skeleton from 'components/skeleton/skeleton'
import { useRecommendations } from 'utils/recommendations'
import { useReviews } from 'utils/reviews'
import { MediaCardGridStyles, MediaPosterGridStyles } from 'styles/grids'
import Reviews from 'components/cards/reviews'
import RecommendationsSmallGrid from 'components/recommendations/recommendations-small-grid'

function Home() {
  const { recommendations, isLoading: recommendationsLoading } = useRecommendations()
  const {reviews, isLoading: reviewsLoading} = useReviews()

  const highlightedRecommendations = recommendations?.slice(0, 4)
  const remainingRecommendations = recommendations?.slice(4) 

  return(
    <>
      <Section>
        <h1>Recent Recommendations</h1>
        <MediaCardGridStyles>
          {recommendationsLoading ? 
            <Skeleton number={4} component="recommendation" /> :
            highlightedRecommendations?.map(recommendation => (
              <RecommendationCard 
                key={recommendation._id} 
                recommendation={recommendation}
              />
            ))}
        </MediaCardGridStyles>
        <RecommendationsSmallGrid loading={recommendationsLoading} recommendations={remainingRecommendations} />
      </Section>
      <Section orange>
        <h1>Recent Reviews</h1>
        <Reviews loading={reviewsLoading} reviews={reviews} large />
      </Section>
    </>
  )
}

export default Home