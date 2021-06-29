import styled from 'styled-components'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

const MediaPosterStyles = styled.div`
  /* width: 23.195%; */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 23.195%;
  display: flex;
  flex-direction: column;
  min-width: 215px;
  max-width: 225px;
  .poster {
    width: 100%;
    object-fit: cover;
  }
  .rottenGas {
    display: flex;
    align-items: center;
    border-top: 3px solid var(--yellow);
    background: white;
  }
  .rottenIcon {
    height: 30px;
    margin: 0 12px;
  }
  .score {
    font-size: 12px;
    margin-right: 6px;
  }
`

const MediaPoster = (props) => {
  const { poster, rottenAverage, rottenCount } = props
  console.log(props)
  return(
    <MediaPosterStyles>
      <img className='poster' src={poster} alt="" />
      <div className='rottenGas'>
        <img className='rottenIcon' 
          src={rottenAverage > 899 ? rottenIcons.certifiedGa 
            : rottenAverage > 599 ? rottenIcons.freshGa 
              : rottenIcons.rottenGa}  
          alt="" /> 
        <p>{rottenAverage}<span className='score'>/1000</span> <small>{rottenCount} Reviews</small></p>
      </div>
    </MediaPosterStyles>
  )
} 

MediaPoster.propTypes = {
  poster: PropTypes.string,
  rottenAverage: PropTypes.number,
  rottenCount: PropTypes.number
}

export default MediaPoster