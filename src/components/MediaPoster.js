import styled from 'styled-components'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MediaPosterStyles = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    width: 100%;
    object-fit: cover;
  }
`

const RottenGaStyles = styled.div`
    display: flex;
    padding: 6px;
    align-items: center;
    border: 1px solid var(--lighter-gray);
    border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
    background: white;
    img {
      height: 30px;
      margin: 0 12px;
    }
    span {
      font-size: 12px;
      margin-right: 6px;
    }
    @media (max-width: 500px) {
      padding: 0;
      small {
        display: block;
      }
      p {
        margin: 6px;
      }
    }
`

const MediaPoster = ({ id, poster, rottenAverage, rottenCount, type }) => {
  return(
    <Link to={`/recommendation/${id}`}>
      <MediaPosterStyles type={type}>
        <img className='poster' src={poster} alt="" />
        <RottenGaStyles className='rottenGas' type={type} >
          <img className='rottenIcon' 
            src={
              !rottenAverage ? rottenIcons.noReview :
                rottenAverage > 899 ? rottenIcons.certifiedGa 
                  : rottenAverage > 599 ? rottenIcons.freshGa 
                    : rottenIcons.rottenGa}  
            alt="" /> 
          {!rottenAverage ? <small>Not yet rated</small> : 
            <><p>{rottenAverage}<span>/1000</span> <small>{rottenCount} Reviews</small></p></> }
        </RottenGaStyles>
      </MediaPosterStyles>
    </Link>
  )
} 

MediaPoster.propTypes = {
  id: PropTypes.string,
  poster: PropTypes.string,
  rottenAverage: PropTypes.number,
  rottenCount: PropTypes.number,
  type: PropTypes.string,
}

export default MediaPoster