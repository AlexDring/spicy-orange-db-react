import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import reviewLogos from '../assets/images/review-logos/review-icons'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'

const MediaCardStyles = styled.div`
  border: 1px solid var(--lighter-gray);
  background: white;
  display: flex;
  height: 100%;
  transition: all 0.5s ease;
  &:hover {
    background: var(--lighter-gray);
  }
  > img {
    max-width: 44.68%;
    object-fit: cover;
  }
`

const MediaWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
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
    height: 74px;
    object-fit: contain;
    @media (max-width: 500px) {
      max-width: 60px;
    }
  }
`

const MediaCard = ({ singleMedia }) => {
  return(
    <div>
      <MediaCardStyles>
        <img src={singleMedia.Poster} alt="" />
        <MediaWrapperStyles type={singleMedia.Type}>
          <MediaMetaStyles>
            <Link to='/media' >
              <h3>{singleMedia.Title}</h3>
            </Link>
            <p><span style={{'textTransform': 'capitalize'}}>{singleMedia.Type}</span> | {singleMedia.Year} | {singleMedia.Runtime}</p>
            <p className="gray">{singleMedia.Genre}</p>
          </MediaMetaStyles>
          <MediaRatingsStyles>
            {singleMedia.imdbRating !== 'N/A' ?
              <div>
                <img 
                  height='20px' 
                  width='45px' 
                  src={reviewLogos.IMDb} 
                  alt="" />{singleMedia.imdbRating}
              </div> : '' }
            {singleMedia.Metascore !== 'N/A'  ? 
              <div>
                <img className='reviewIcon'
                  src={reviewLogos.metaCritic} 
                  alt="" /> {singleMedia.Metascore}
              </div> : ''}
          </MediaRatingsStyles>
          <RottenReviewStyles className='rottenReviews'>
            <img 
              src={
                !singleMedia.rottenAverage ? rottenIcons.noReview :
                  singleMedia.rottenAverage > 899 ? rottenIcons.certifiedGa 
                    : singleMedia.rottenAverage > 599 ? rottenIcons.freshGa 
                      : rottenIcons.rottenGa} 
              alt="review score icon" />
            <RottenScoreStyles>
              {!singleMedia.rottenAverage ? <small>Not yet rated</small> : 
                <><p> {singleMedia.rottenAverage}<span>/1000</span></p>
                  <small>{singleMedia.rottenCount} Reviews</small></> }
            </RottenScoreStyles>
          </RottenReviewStyles>
        </MediaWrapperStyles>
      </ MediaCardStyles>
    </div>
  )
}

MediaCard.propTypes = {
  singleMedia: PropTypes.object
}

export default MediaCard