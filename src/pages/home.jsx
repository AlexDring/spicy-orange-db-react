import Section from 'components/layout/section'
import { useRecommendations } from 'utils/recommendations'
import { useReviews } from 'utils/reviews'
import ReviewsGrid from 'components/cards/grids/review-grid'
import RecommendationsGrid from 'components/cards/grids/recommendations-grid'
import RecommendationsSmallGrid from 'components/cards/grids/recommendations-small-grid'
import { ReviewGridStyles } from 'styles/grids'
import Skeleton from 'components/skeleton/skeleton'
import { ReviewCard } from 'components/cards'

function Home() {
  const { data, isLoading: recommendationsLoading } = useRecommendations()
  const {
    data: reviewsData, 
    isLoading: reviewsLoading, 
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    hasNextPage
  } = useReviews()

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
        <ReviewGridStyles>
          {reviewsLoading ? 
            <Skeleton count={12} component="review" /> : 
            reviewsData?.pages.map(data => (
              data?.reviews.map((review, index) => (
                <ReviewCard 
                  key={review._id} 
                  review={review}   
                  large
                />
              ))
            ))
          }
        </ReviewGridStyles>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Load more reviews'
                : 'No more reviews to load'}
          </button>
        </div>
        <div>
          {isFetching && !isFetchingNextPage
            ? 'Background Updating...'
            : null}
        </div>
      </Section>
    </>
  )
}

export default Home