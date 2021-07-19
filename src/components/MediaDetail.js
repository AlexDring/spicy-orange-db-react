import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import reviewLogos from '../assets/images/review-logos/review-icons'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import WatchlistToggle from './WatchlistToggle'
import Breadcumbs from './Breadcrumbs'

const MediaContainer = styled.div`
  display: grid;
  border: 1px solid var(--light-gray);
  background: white;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
        "poster meta"
        "poster rottenGas"
        "poster reviews";
  > img {
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 600px){
    grid-template-columns: 150px 1fr;
    grid-template-rows: auto auto auto;
    grid-column-gap: 0;
    grid-template-areas:
      "poster meta"
      "poster reviews"
      "rottenGas rottenGas";
  }
`

const MediaPoster = styled.div`
  grid-area: poster;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const MediaMeta = styled.div`
  grid-area: meta;
  text-align: center;
  padding: 24px 0 0;
  border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
  h1 {
    margin-bottom: 12px;
  }
`

const RottenWrapper = styled.div`
  grid-area: rottenGas;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  div:first-child {
    margin-right: 60px;
  }
`
const RottenScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  small {
    margin-bottom: 6px;
  }
  img {
    height: 140px;
    margin-bottom: 12px;
  }
`

const ExternalReviewsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding-bottom: 24px;
  flex-wrap: wrap;
  img {
    margin-right: 6px;
  }
  > li {
    display: flex;
    list-style: none;
    align-items: center;
    :nth-child(-n + 2) {
      margin-right: 36px;
      @media (max-width: 600px) {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 0;
    justify-content: space-evenly;
    img {
      margin-bottom: 6px;
    }
    > li {
      flex-direction: column;
      align-items: center;
    }
  }
`

const MediaDetail = ({ displayModal, setDisplayModal, media }) => {
  return(
    <>
      <div style={{'display': 'flex', 'justifyContent': 'space-between', 'flexWrap': 'wrap'}}>
        <Breadcumbs routes={[
          {
            path: '/',
            breadcrumb: 'Home'
          },
          {
            path: '/recommendations',
            breadcrumb: 'Recommendations'
          },
          {
            path: `/recommendation/${media._id}`,
            breadcrumb: `${media.Title}`
          }
        ]} />
        <WatchlistToggle />
      </div>
      <MediaContainer>
        <MediaPoster>
          <img src={media.Poster} alt={`${media.Title} poster`} />
        </MediaPoster>
        <MediaMeta type={media.Type}>
          <h1>{media.Title}</h1>
          <p><span style={{'textTransform': 'capitalize'}}>{media.Type}</span> • {media.Year} • {media.Runtime}</p>
        </MediaMeta>
        <RottenWrapper>
          <HashLink to='#rottenGas'>
            <RottenScore>
              <small>Rotten Ga&apos;s Total</small>
              <img src={
                !media.rottenAverage ? rottenIcons.noReview :
                  media.rottenAverage > 899 ? rottenIcons.certifiedGa 
                    : media.rottenAverage > 599 ? rottenIcons.freshGa 
                      : rottenIcons.rottenGa} alt="" />
              {media.rottenCount !== 0 ? 
                <>
                  <div>{media.rottenAverage}/1000</div>
                  <small>{media.rottenCount} Reviews</small>
                </> : <small>No Ratings</small>}
            </RottenScore>
          </HashLink>
          <RottenScore onClick={() => setDisplayModal(!displayModal)}>
            <small>Your Rating</small>
            <img src={rottenIcons.certifiedGa} alt="" />
            <div>/1000</div>
          </RottenScore>
        </RottenWrapper>
        <ExternalReviewsWrapper>
          {media.mediaDetail.Ratings.map(r => 
            (<li key={r._id}>
              <img 
                src={
                  r.Source === 'Internet Movie Database' ? reviewLogos.IMDbColor : 
                    r.Source === 'Rotten Tomatoes' ? reviewLogos.rottenToms : 
                      reviewLogos.metaCriticColor} 
                alt="" />
              <p>{r.Value}
              </p>
            </li>)
          )}
        </ExternalReviewsWrapper>
      </MediaContainer>
    </>
  )
}

MediaDetail.propTypes = {
  media: PropTypes.object,
  displayModal: PropTypes.bool,
  setDisplayModal: PropTypes.func,
}

export default MediaDetail