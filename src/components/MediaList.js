
import PropTypes from 'prop-types'
import MediaCard from './MediaCard'
import MediaPoster from './MediaPoster'
import { MediaCardGridStyles, MediaPosterGridStyles } from '../styles/styles'
import { useRecommendations } from '../utils/recommendations'
import { CardSkeleton, PosterSkeleton } from '../utils/skeleton'

const MediaList = () => {
  const { recommendations, isLoading } = useRecommendations()

  const highlightedRecommendations = recommendations?.slice(0, 4)
  const remainingRecommendations = recommendations?.slice(4) 

  return(
    <>
      <MediaCardGridStyles>
        {isLoading ? 
          Array.from({length: 4}, (v, i) => <CardSkeleton key={`media-card-${i}`} />) :
          highlightedRecommendations?.map(singleMedia => (
            <MediaCard 
              key={singleMedia._id} 
              singleMedia={singleMedia} />
          ))}
      </MediaCardGridStyles>
      <MediaPosterGridStyles>
        {isLoading ? 
          Array.from({length: 8}, (v, i) => 
            <PosterSkeleton key={`media-poster-${i}`} />) :
          remainingRecommendations?.map(singleMedia => (
            <MediaPoster 
              key={singleMedia._id} 
              id={singleMedia._id} 
              poster={singleMedia.Poster} 
              rottenAverage={singleMedia.rottenAverage} 
              rottenCount={singleMedia.rottenCount}
              type={singleMedia.Type} />
          ))
        }
      </MediaPosterGridStyles>
    </>
  )
}

MediaList.propTypes = {
  recommendations: PropTypes.array
}

export default MediaList