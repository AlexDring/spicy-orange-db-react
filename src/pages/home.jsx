import Section from 'components/layout/section'
import { RecommendationCard, RecommendationCardSmall, ReviewCard } from 'components/cards'
import Skeleton from 'components/skeleton/skeleton'
import { useRecommendations } from 'utils/recommendations'
import { useReviews } from 'utils/reviews'
import { MediaCardGridStyles, MediaPosterGridStyles } from 'styles/grids'
import Reviews from 'components/cards/reviews'

function Home() {
  const { recommendations, isLoading: recommendationsLoading } = useRecommendations()
  const {reviews, isLoading: reviewsLoading} = useReviews()

  const highlightedRecommendations = recommendations?.slice(0, 4)
  const remainingRecommendations = recommendations?.slice(4) 

  return(
    <>
      <Section>
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
        <MediaPosterGridStyles>
          {recommendationsLoading ? 
            <Skeleton number={8} component="recommendation-small" /> :
            remainingRecommendations?.map(recommendation => (
              <RecommendationCardSmall 
                key={recommendation._id} 
                recommendation={recommendation} 
              />
            ))
          }
        </MediaPosterGridStyles>
      </Section>
      <Section orange>
        <Reviews loading={reviewsLoading} reviews={reviews} large />
      </Section>
    </>
  )
}

export default Home