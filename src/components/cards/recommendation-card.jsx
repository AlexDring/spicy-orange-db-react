import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import reviewLogos from 'assets/images/review-logos/review-icons'
import { rottenReviewImage } from 'utils/misc'

const MediaCardStyles = styled.div`
  box-sizing: border-box;
  border: 1px solid var(--lighter-gray);
  display: flex;
  /* min-height: 319px; */
  height: 100%;
  transition: all 0.5s ease;
  max-width: 470px;
  &:hover {
    background: var(--lighter-gray);
  }
  > img {
    /* min-width: 209.1px; */
    height: 314px;
    max-width: 50%;
    /* max-width: 44.68%; */
    object-fit: cover;
  }
`

const MediaWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  align-items: space-between;
  border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
  width: 100%;
  padding: 24px;
  @media (max-width: 500px) {
    padding: 12px;
  }
`

const MediaMetaStyles = styled.div`
  flex-grow: 2;
  span {
    text-transform: capitalize;
  }
  h3 {
    max-height: 46px;
    overflow: hidden;
  }
  @media (max-width: 500px) {
    p {
      font-size: 14px;
    }
  }
  p:last-child {
    font-size: 12px;
    @media (max-width: 376px) {
      display: none;
    }
  }
`

const MediaRatingsStyles = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 14px;
  > div {
    display: flex;
  &:first-child {
      margin-right: 24px;
      @media (max-width: 500px) {
        margin-right: 12px;
      }
    }
  }
  img {
    height: 20px;
    margin-right: 6px;
    @media (max-width: 500px) {
      margin-right: 0;
    }
  }
`

const RottenScoreStyles =styled.div`
  text-align: center;
  margin-left: 24px;
  @media (max-width: 500px) {
    margin-left: 12px;
  }
`

const RottenReviewStyles = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    min-width: 67px;
    height: 74px;
    object-fit: contain;
    @media (max-width: 500px) {
      max-width: 60px;
    }
  }
`

const RecommendationCard = ({ recommendation }) => {
  const { Poster, Type, _id, Title, Year, Runtime, Genre, imdbRating, Metascore, rottenAverage, rottenCount } = recommendation
  return(
    <MediaCardStyles>
      <img src={Poster} alt="" />
      <MediaWrapperStyles type={Type}>
        <MediaMetaStyles>
          <Link to={`/recommendation/${_id}`} >
            <h3>{Title}</h3>
          </Link>
          <p><span>{Type}</span> • {Year} • {Runtime}</p>
          <p className="gray">{Genre}</p>
        </MediaMetaStyles>
        <MediaRatingsStyles>
          {imdbRating !== 'N/A' ?
            <div>
              <img 
                height='20px' 
                width='45px'
                style={{}} 
                src={reviewLogos.IMDb} 
                alt="" /><p>{imdbRating}<small>/10</small></p>
            </div> : '' }
          {Metascore !== 'N/A'  ? 
            <div>
              <img className='reviewIcon'
                width="22.1px"
                height="20px"
                src={reviewLogos.metaCritic} 
                alt="" /> <p>{Metascore}<small>/100</small></p>
            </div> : ''}
        </MediaRatingsStyles>
        <RottenReviewStyles className='rottenReviews'>
          <img 
            src={rottenReviewImage(rottenAverage)} 
            alt="review score icon" />
          <RottenScoreStyles>
            {!rottenAverage ? <small>Not yet rated</small> : 
              <><p> {rottenAverage}<small>/1000</small></p>
                <small>{rottenCount} Reviews</small></> }
          </RottenScoreStyles>
        </RottenReviewStyles>
      </MediaWrapperStyles>
    </ MediaCardStyles>
  )
}

RecommendationCard.propTypes = {
  recommendation: PropTypes.object
}

export default RecommendationCard