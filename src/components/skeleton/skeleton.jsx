import {
  RecommendationSkeleton,
  SmallRecommendationSkeleton,
  MediaDetailSkeleton,
  SearchResultSkeleton,
  ReviewSkeleton
} from './skeleton-templates'

const Skeleton = ({number, component}) => (
  Array.from({length: number}, (v, i) => 
    component === 'recommendation' ? <RecommendationSkeleton key={`media-card-${i}`} /> : 
      component === 'recommendation-small' ? <SmallRecommendationSkeleton key={`media-card-small-${i}`} /> :
        component === 'media-detail' ? <MediaDetailSkeleton key={`media-detail-skeleton-${i}`} /> :
          component === 'search' ? <SearchResultSkeleton key={`search-skeleton-${i}`} /> :
            component === 'review' ? <ReviewSkeleton key={`review-skeleton-${i}`} /> : null
  )
)

export default Skeleton

