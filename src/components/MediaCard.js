import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as IMDb} from '../assets/images/logos/imdb.svg'
import metaCritic from '../assets/images/logos/meta-critic.svg'
import fresh from '../assets/images/rotten-gas/fresh.png'

const MediaCardStyles = styled.div`
  /* width: 48.45%; */
  max-height: 275px;
  border: 1px solid #ededed;
  background: white;
  display: flex;
  .mediaPoster {
    height: 100%;
    width: 44.68%;
    object-fit: cover;
  }
  .mediaInfo {
    border-top: 3px solid var(--orange);
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
    .reviewCount {
      font-size: 12px;
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
`

const MediaCard = () => {
  return(
    <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
      <MediaCardStyles>
        <img className='mediaPoster' src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" alt="" />
        <div className='mediaInfo'>
          <div className='mediaMeta'>
            <Link to='/recommendations/inception' >
              <h3>Inception</h3>
            </Link>
            <p>Film | 2020 | 119 min</p>
            <p className="gray">Action, Drama, Thriller</p>
          </div>
          <div className='mediaRatings'>
            <div>
              <IMDb height='20px' width='45px' /> 8.8<span>/10</span>
            </div>
            <div>
              <img className='reviewIcon' src={metaCritic} alt="" /> 74<span>/100</span>
            </div>
          </div>
          <div className='rottenReviews'>
            <img src={fresh} alt="" />
            <div className='rottenScore'>
              <p className='reviewScore'>567<span>/1000</span></p>
              <p className='gray caps reviewCount'>2 Reviews</p>
            </div>
          </div>
        </div>
      </ MediaCardStyles>
    </div>
  )
}

export default MediaCard