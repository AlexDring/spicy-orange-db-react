import styled from 'styled-components'
import rottenIcons from 'assets/images/rotten-gas/rottenIcons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { rottenReviewImage } from 'utils/misc'

const MediaPosterStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 390px;
  > img {
    width: 100%;
    height: 100%;
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

const RecommendationCardSmall = ({ recommendation }) => {
  const { _id, Type, Poster, rottenAverage, rottenCount } = recommendation
  return(
    <Link to={`/recommendation/${_id}`}>
      <MediaPosterStyles type={Type}>
        <img className='poster' src={Poster} alt="Recommendation Poster" />
        <RottenGaStyles className='rottenGas' type={Type} >
          <img className='rottenIcon' 
            src={rottenReviewImage(rottenAverage)}  
            alt="" /> 
          {!rottenAverage ? 
            <small>Not yet rated</small> : 
            <p>{rottenAverage}<span>/1000</span> 
              <small>{rottenCount} Reviews</small>
            </p>
          }
        </RottenGaStyles>
      </MediaPosterStyles>
    </Link>
  )
} 

RecommendationCardSmall.propTypes = {
  recommendation: PropTypes.object
}

export default RecommendationCardSmall