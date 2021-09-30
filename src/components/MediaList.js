
import MediaCard from './MediaCard'
import MediaPoster from './MediaPoster'
import PropTypes from 'prop-types'
import { MediaCardGridStyles, MediaPosterGridStyles } from '../styles/styles'
import { useRecommendations } from '../utils/recommendations'

const MediaList = () => {
  const {recommendations} = useRecommendations()

  const highlightedRecommendations = recommendations?.slice(0, 4) // display first 4 as cards
  const remainingRecommendations = recommendations?.slice(4) // display remaining as posters

  return(
    <>
      <MediaCardGridStyles>
        {highlightedRecommendations?.map(singleMedia => (
          <MediaCard 
            key={singleMedia._id} 
            singleMedia={singleMedia} />
        ))}
      </MediaCardGridStyles>
      <MediaPosterGridStyles>
        {remainingRecommendations?.map(singleMedia => (
          <MediaPoster 
            key={singleMedia._id} 
            id={singleMedia._id} 
            poster={singleMedia.Poster} 
            rottenAverage={singleMedia.rottenAverage} 
            rottenCount={singleMedia.rottenCount}
            type={singleMedia.Type} />
        ))}
      </MediaPosterGridStyles>
    </>
  )
}

MediaList.propTypes = {
  recommendations: PropTypes.array
}

export default MediaList