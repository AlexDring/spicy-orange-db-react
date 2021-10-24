import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import reviewLogos from 'assets/images/review-logos/review-icons'
import { rottenReviewImage } from 'utils/misc'
import styled from 'styled-components'
import ExternalReviews from 'components/external-reviews'
import RecommendationMeta from 'components/recommendation-meta'

const RecommendationWrapper = styled.div`
  background: white;
  display: flex;
  border: 1px solid var(--lighter-gray);
  > img {
    width: 100%;
    max-width: 50%;
    object-fit: cover;
  }
`

const RecommendationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 24px;
  border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
  ul {
    margin: 0 0 5px;
  }
  ul, p {
    font-size: 14px;
    font-weight: 200;
  }
  > div:first-of-type {
    margin: auto 0 16px;
  }
  @media (max-width: 450px) {
    padding: 18px;
  }
`

const RottenWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
    width: 50px;
  }
`

const RecommendationCard = ({ recommendation }) => {
  console.log(recommendation)
  const { 
    _id,
    Poster,
    Type,
    Title,
    Year,
    Runtime,
    Genre,
    imdbRating,
    Metascore,
    rottenAverage,
    rottenCount
  } = recommendation

  return(
    <Link to={`/recommendation/${_id}`} >
      <RecommendationWrapper>
        <img src={Poster} alt="" />
        <RecommendationContainer type={Type}>
          <h3>{Title}</h3>
          <RecommendationMeta meta={[Type, Year, Runtime]} />
          <p className="gray">{Genre}</p>
          <ExternalReviews imdbRating={imdbRating} Metascore={Metascore} />
          <RottenWrapper className='rottenReviews'>
            <img 
              src={rottenReviewImage(rottenAverage)} 
              alt="review score icon" />
            <div>
              {!rottenAverage ? <small>Not yet rated</small> : 
                <>
                  <p> {rottenAverage}<small>/1000</small></p>
                  <small>{rottenCount} Reviews</small>
                </> 
              }
            </div>
          </RottenWrapper>
        </RecommendationContainer>
      </RecommendationWrapper>
    </Link>
  )
}

RecommendationCard.propTypes = {
  recommendation: PropTypes.object
}

export default RecommendationCard