import styled from 'styled-components'
import MediaCard from './MediaCard'
import MediaPoster from './MediaPoster'
import PropTypes from 'prop-types'
import { MediaCardGridStyles } from '../styles/styles'
import { useSelector } from 'react-redux'
import { selectAllRecommendations } from '../reducers/recommendationsSlice'

const MediaPosterGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  grid-auto-rows: 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 15px;
  margin-top: 30px;
`

const MediaList = () => {
  const recommendations = useSelector(selectAllRecommendations)

  const highlightedRecommendations = recommendations.slice(0, 4) // display first 4 as cards
  const remainingRecommendations = recommendations.slice(4) // display remaining as posters

  return(
    <>
      <MediaCardGridStyles>
        {highlightedRecommendations.map(singleMedia => (
          <MediaCard 
            key={singleMedia._id} 
            singleMedia={singleMedia} />
        ))}
      </MediaCardGridStyles>
      <MediaPosterGridStyles>
        {remainingRecommendations.map(singleMedia => (
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