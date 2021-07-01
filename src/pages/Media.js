import { SectionStyles } from '../styles/styles'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import metaCritic from '../assets/images/logos/meta-critic.svg'
import styled from 'styled-components'

const inception = {
  '_id': '60ba24a46960ba215ceabb99',
  'Poster': 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  'Title': 'Inception',
  'Type': 'movie',
  'Year': '2010',
  'Runtime': '148 min',
  'Director': 'Christopher Nolan',
  'Genre': 'Action, Adventure, Sci-Fi, Thriller',
  'Language': 'English, Japanese, French',
  'Metascore': '74',
  'imdbRating': '8.8',
  'user': 'Dringer',
  'mediaDetail': {
    '_id': '60ba24a46960ba215ceabb95',
    'Actors': 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    'Awards': 'Won 4 Oscars. Another 153 wins & 220 nominations.',
    'BoxOffice': '$292,576,195',
    'Country': 'USA, UK',
    'DVD': '20 Jun 2013',
    'Plot': 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    'Production': 'Syncopy, Warner Bros.',
    'Rated': 'PG-13',
    'Ratings': [
      {
        '_id': '60ba24a46960ba215ceabb96',
        'Source': 'Internet Movie Database',
        'Value': '8.8/10'
      },
      {
        '_id': '60ba24a46960ba215ceabb97',
        'Source': 'Rotten Tomatoes',
        'Value': '87%'
      },
      {
        '_id': '60ba24a46960ba215ceabb98',
        'Source': 'Metacritic',
        'Value': '74/100'
      }
    ],
    'Released': '16 Jul 2010',
    'Website': 'N/A',
    'Writer': 'Christopher Nolan',
    'imdbID': 'tt1375666',
    'imdbVotes': '2,112,329',
    'Response': 'True',
    'rottenReviews': [
      {
        '_id': '60db3532f97f998c0e6e7249',
        'user': 'Dank2',
        'score': 768,
        'review': 'niceeee'
      },
      {
        '_id': '60db3538f97f998c0e6e724b',
        'user': 'Dank4',
        'score': 768,
        'review': 'niceeee'
      },
      {
        '_id': '60db353bf97f998c0e6e724d',
        'user': 'Dank5',
        'score': 768,
        'review': 'niceeee'
      }
    ],
    'userId': '60b646f80f430fbb140f4ea9',
    '__v': 62
  },
  '__v': 0,
  'rottenAverage': 768,
  'rottenCount': 3
}

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
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 24px;
`
const RottenScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Media = () => {
  return (
    <>
      <SectionStyles>
        <section>
          {/* <MediaContainer>
            <img src={inception.Poster} alt={`${inception.Title} poster`} />
            <MediaWrapper type={inception.Type}>
              <h1>{inception.Title}</h1>
              <p><span style={{'textTransform': 'capitalize'}}>{inception.Type}</span> | {inception.Year} | {inception.Runtime}</p>
              <RottenWrapper>
                <RottenScore>
                  <small>Rotten Ga&apos;s</small>
                  <img src={rottenIcons.freshGa} alt="" />
                  <div>{inception.rottenAverage}/1000</div>
                </RottenScore>
                <RottenScore>
                  <small>Your Rating</small>
                  <img src={rottenIcons.certifiedGa} alt="" />
                  <div>{inception.mediaDetail.rottenReviews[0].score}/1000</div>
                  <small>{inception.rottenCount} Reviews</small>
                </RottenScore>
              </RottenWrapper>
              <ExternalReviewsWrapper>
                <li>
                  <img src={metaCritic} alt="imdb logo and score" />
                  <p>{inception.mediaDetail.Ratings[0].Value}</p>
                </li>
                <li>
                  <img src={metaCritic} alt="metacritic logo and score" />
                  <p>{inception.mediaDetail.Ratings[1].Value}</p>
                </li>
                <li>
                  <img src={metaCritic} alt="rotten tomatoes and score" />
                  <p>{inception.mediaDetail.Ratings[2].Value}</p>
                </li>
              </ExternalReviewsWrapper>
            </MediaWrapper>
          </MediaContainer> */}
          <MediaContainer>
            <MediaPoster>
              <img src={inception.Poster} alt={`${inception.Title} poster`} />
            </MediaPoster>
            {/* <MediaWrapper type={inception.Type}> */}
            <MediaMeta type={inception.Type}>
              <h1>{inception.Title}</h1>
              <p><span style={{'textTransform': 'capitalize'}}>{inception.Type}</span> | {inception.Year} | {inception.Runtime}</p>
            </MediaMeta>
            <RottenWrapper>
              <RottenScore>
                <small>Rotten Ga&apos;s</small>
                <img src={rottenIcons.freshGa} alt="" />
                <div>{inception.rottenAverage}/1000</div>
              </RottenScore>
              <RottenScore>
                <small>Your Rating</small>
                <img src={rottenIcons.certifiedGa} alt="" />
                <div>{inception.mediaDetail.rottenReviews[0].score}/1000</div>
                <small>{inception.rottenCount} Reviews</small>
              </RottenScore>
            </RottenWrapper>
            <ExternalReviewsWrapper>
              <li>
                <img src={metaCritic} alt="imdb logo and score" />
                <p>{inception.mediaDetail.Ratings[0].Value}</p>
              </li>
              <li>
                <img src={metaCritic} alt="metacritic logo and score" />
                <p>{inception.mediaDetail.Ratings[1].Value}</p>
              </li>
              <li>
                <img src={metaCritic} alt="rotten tomatoes and score" />
                <p>{inception.mediaDetail.Ratings[2].Value}</p>
              </li>
            </ExternalReviewsWrapper>
            {/* </MediaWrapper> */}
          </MediaContainer>
        </section>
      </SectionStyles>
      <SectionStyles orange>
        <section>
          <div>Reviews</div>
        </section>
      </SectionStyles>
    </> 
  )
}

export default Media