import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as IMDb} from '../assets/images/logos/imdb.svg'
import metaCritic from '../assets/images/logos/meta-critic.svg'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import PropTypes from 'prop-types'

const MediaCardStyles = styled.div`
  /* width: 48.45%; */
  /* max-height: 275px; */
  border: 1px solid #ededed;
  background: white;
  display: flex;
  .mediaPoster {
    /* height: 100%; */
    max-width: 44.68%;
    object-fit: cover;
  }
  .mediaInfo {
    border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
  }
  .mediaMeta {
    margin-bottom: auto;
  }
  .mediaRatings {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    div:first-child {
      margin-right: 24px;
    }
    span {
      font-size: 12px;
      padding-bottom: 3px;
    }
  }
  .mediaGenre {
    font-size: 12px;
  }
  .reviewIcon {
    height: 20px;
    margin-right: 6px;
  }
  .rottenScore {
    text-align: center;
    margin-left: 24px;
    p {
      margin: 0;
    }
    .reviewScore {
      font-size: 20px;
      span {
        font-size: 12px;
      }
    }
  }
  .rottenReviews {
    margin-top: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      height: 74px;
      object-fit: contain;
    }
  }
  h3 {
    max-height: 45px;
    overflow: hidden;
  }
`

const MediaCard = ({ singleMedia }) => {
  return(
    // <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
    <div>
      <MediaCardStyles type={singleMedia.Type}>
        <img className='mediaPoster' src={singleMedia.Poster} alt="" />
        <div className='mediaInfo'>
          <div className='mediaMeta'>
            <Link to='/recommendations/inception' >
              <h3>{singleMedia.Title}</h3>
            </Link>
            <p><span style={{'textTransform': 'capitalize'}}>{singleMedia.Type}</span> | {singleMedia.Year} | {singleMedia.Runtime}</p>
            <p className="gray mediaGenre">{singleMedia.Genre}</p>
          </div>
          <div className='mediaRatings'>
            <div>
              <IMDb height='20px' width='45px' /> {singleMedia.imdbRating}<span>/10</span>
            </div>
            {singleMedia.Metascore !== 'N/A'  ? 
              <div>
                <img className='reviewIcon' src={metaCritic} alt="" /> {singleMedia.Metascore}<span>/100</span>
              </div> : ''}
          </div>
          <div className='rottenReviews'>
            <img 
              src={
                singleMedia.rottenAverage > 899 ? rottenIcons.certifiedGa 
                  : singleMedia.rottenAverage > 599 ? rottenIcons.freshGa 
                    : rottenIcons.rottenGa} alt="review score icon" />
            <div className='rottenScore'>
              <p className='reviewScore'> {singleMedia.rottenAverage}<span>/1000</span></p>
              <small>{singleMedia.rottenCount} Reviews</small>
            </div>
          </div>
        </div>
      </ MediaCardStyles>
    </div>
  )
}

MediaCard.propTypes = {
  singleMedia: PropTypes.object
}

export default MediaCard