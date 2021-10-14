import {
  RecommendationSkeleton,
  SmallRecommendationSkeleton,
  SearchResultSkeleton,
  ReviewSkeleton
} from './skeleton-templates'

const Skeleton = ({count, component}) => (
  Array.from({length: count}, (v, i) => 
    component === 'recommendation' ? <RecommendationSkeleton key={`media-card-${i}`} /> : 
      component === 'recommendation-small' ? <SmallRecommendationSkeleton key={`media-card-small-${i}`} /> :
        component === 'search' ? <SearchResultSkeleton key={`search-skeleton-${i}`} /> :
          component === 'review' ? <ReviewSkeleton key={`review-skeleton-${i}`} /> : null
  )
)

export default Skeleton

