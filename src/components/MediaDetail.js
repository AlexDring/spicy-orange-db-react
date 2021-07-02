import styled from 'styled-components'
import PropTypes from 'prop-types'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import metaCritic from '../assets/images/logos/meta-critic.svg'
import { HashLink } from 'react-router-hash-link'

// const MediaContainer = styled.div`
//   display: grid;
//   grid-template-columns: 335px 1fr;
//   grid-gap: 24px;
//   > img {
//     height: 100%;
//     object-fit: cover;
//   }
// `

// const MediaWrapper = styled.div`
//   border: 1px solid #ededed;
//   border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
//   background-color: white;
//   padding: 24px;
//   text-align: center;
// `

// const RottenWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   div:first-child {
//     margin-right: 24px;
//   }
// `

// const RottenScore = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   small {
//     margin-bottom: 6px;
//   }
//   img {
//     max-height: 170px;
//     margin-bottom: 12px;
//   }
// `

// const ExternalReviewsWrapper = styled.ul`
//   display: flex;
//   justify-content: center;
//   img {
//     margin-right: 6px;
//   }
//   > li {
//     display: flex;
//     list-style: none;
//     :nth-child(-n + 2) {
//       margin-right: 24px;
//     }
//   }
// `

const MediaContainer = styled.div`
  display: grid;
  border: 1px solid #ededed;
  background: white;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  /* grid-column-gap: 24px; */
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
    max-height: 170px;
    margin-bottom: 12px;
  }
`

const ExternalReviewsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding-bottom: 24px;
  img {
    margin-right: 6px;
  }
  > li {
    display: flex;
    list-style: none;
    :nth-child(-n + 2) {
      margin-right: 36px;
    }
  }
  @media (max-width: 600px) {
    img {
      margin-bottom: 6px;
    }
    > li {
      flex-direction: column;
      align-items: center;
    }
  }
`


const MediaDetail = (props) => {
  const { displayModal, setDisplayModal, media } = props
  return(
    <>
      {/* <MediaContainer>
        <img src={media.Poster} alt={`${media.Title} poster`} />
        <MediaWrapper type={media.Type}>
          <h1>{media.Title}</h1>
          <p><span style={{'textTransform': 'capitalize'}}>{media.Type}</span> | {media.Year} | {media.Runtime}</p>
          <RottenWrapper>
            <RottenScore>
              <small>Rotten Ga&apos;s</small>
              <img src={rottenIcons.freshGa} alt="" />
              <div>{media.rottenAverage}/1000</div>
            </RottenScore>
            <RottenScore>
              <small>Your Rating</small>
              <img src={rottenIcons.certifiedGa} alt="" />
              <div>{media.mediaDetail.rottenReviews[0].score}/1000</div>
              <small>{media.rottenCount} Reviews</small>
            </RottenScore>
          </RottenWrapper>
          <ExternalReviewsWrapper>
            <li>
              <img src={metaCritic} alt="imdb logo and score" />
              <p>{media.mediaDetail.Ratings[0].Value}</p>
            </li>
            <li>
              <img src={metaCritic} alt="metacritic logo and score" />
              <p>{media.mediaDetail.Ratings[1].Value}</p>
            </li>
            <li>
              <img src={metaCritic} alt="rotten tomatoes and score" />
              <p>{media.mediaDetail.Ratings[2].Value}</p>
            </li>
          </ExternalReviewsWrapper>
        </MediaWrapper>
      </MediaContainer> */}
      <MediaContainer>
        <MediaPoster>
          <img src={media.Poster} alt={`${media.Title} poster`} />
        </MediaPoster>
        <MediaMeta type={media.Type}>
          <h1>{media.Title}</h1>
          <p><span style={{'textTransform': 'capitalize'}}>{media.Type}</span> | {media.Year} | {media.Runtime}</p>
        </MediaMeta>
        <RottenWrapper>
          <HashLink to='/media/#rottenGas'>
            <RottenScore>
              <small>Rotten Ga&apos;s Total</small>
              <img src={rottenIcons.freshGa} alt="" />
              <div>{media.rottenAverage}/1000</div>
              <small>{media.rottenCount} Reviews</small>
            </RottenScore>
          </HashLink>
          <RottenScore onClick={() => setDisplayModal(!displayModal)}>
            <small>Your Rating</small>
            <img src={rottenIcons.certifiedGa} alt="" />
            <div>{media.mediaDetail.rottenReviews[0].score}/1000</div>
          </RottenScore>
        </RottenWrapper>
        <ExternalReviewsWrapper>
          <li>
            <img src={metaCritic} alt="imdb logo and score" />
            <p>{media.mediaDetail.Ratings[0].Value}</p>
          </li>
          <li>
            <img src={metaCritic} alt="metacritic logo and score" />
            <p>{media.mediaDetail.Ratings[1].Value}</p>
          </li>
          <li>
            <img src={metaCritic} alt="rotten tomatoes and score" />
            <p>{media.mediaDetail.Ratings[2].Value}</p>
          </li>
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