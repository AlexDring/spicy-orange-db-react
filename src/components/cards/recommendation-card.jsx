import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ExternalReviews from 'components/external-reviews'
import RecommendationMeta from 'components/recommendation-meta'
import RottenReview from 'components/rotten-review'
import { borderColor } from 'utils/misc'

const RecommendationWrapper = styled.div`
  background: white;
  display: flex;
  border: 1px solid var(--lighter-gray);
  height: 100%;
  max-width: 462.5px;
  > img {
    width: 100%;
    max-width: 50%;
    object-fit: cover;
  }
  h2 {
    margin-bottom: 12px;
  }
`

const RecommendationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 24px;
  border-top: ${props => borderColor(props.type)};
  ul {
    margin: 0 0 5px;
  }
  p {
    font-size: 14px;
    font-weight: 200;
  }
  > div:first-of-type {
    margin: auto 0 16px;
    @media (max-width: 450px) {
      margin: auto 0 7.5px;
  }
  }
  > div:last-of-type {
    margin-right: 0;
    > img {
      margin-right: 10px;
      width: 70px;
      @media (max-width: 450px) {
        margin-right: 5px;
        width: 55px;
      }
    }
    @media (max-width: 450px) {
      align-self: flex-start;
      span {
        display: inline-block;
      }
    }
  }
  @media (max-width: 450px) {
    padding: 18px;
    h2 {
      font-size: 20px;
    }
    p {
      margin-bottom: 5px;
    }
  }
`

const RecommendationCard = ({ recommendation }) => {
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
          <h2>{Title}</h2>
          <RecommendationMeta meta={[Type, Year, Runtime]} />
          <p className="gray">{Genre}</p>
          <ExternalReviews imdbRating={imdbRating} Metascore={Metascore} />
          <RottenReview rottenAverage={rottenAverage} rottenCount={rottenCount} />
        </RecommendationContainer>
      </RecommendationWrapper>
    </Link>
  )
}

RecommendationCard.propTypes = {
  recommendation: PropTypes.object
}

export default RecommendationCard