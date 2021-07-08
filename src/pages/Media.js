import { useState } from 'react'
import { SectionStyles } from '../styles/styles'
import MediaDetail from '../components/MediaDetail'
import ReviewGridStyles from '../styles/Grids'
import styled from 'styled-components'
import Review from '../components/Review'
import Modal from '../components/Modal'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'

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
  'rottenAverage': 914,
  'rottenCount': 4
}

const MediaInformationWrapper = styled.section`
  padding: 0;
  p {
    max-width: 750px;
  }
`

const MediaInformationStyles = styled.ul`
  li {
    margin-bottom: 16px;
  }
  span {
    font-weight: 700;
    text-transform: uppercase;
    width: 150px;
    float: left;
    display: block;
  }
  div { 
    overflow: hidden;
  }
`

const NewSectionStyles = styled(SectionStyles)`
  section {
    padding-top: 0;
  }
`

const RottenReviewStles = styled.div`
  padding: 75px 24px 24px;
  width: 550px;
  text-align: center;
  background: var(--light-orange);
  position: relative;
  @media (max-width: 500px) {
    width: auto;
  }
  img {
    width: 140px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  textarea {
    width: 80%;
  }
  input {
    width: 100px;
    margin-bottom: 24px;
    font-size: 36px;
  }
  div:last-child {
    text-align: right;
    margin: 24px 0 auto;
  }
`

const Media = () => {
  const [displayModal, setDisplayModal] = useState(false)
  return (
    <>
      <SectionStyles>
        <section>
          <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} >
            <RottenReviewStles>
              <img src={rottenIcons.noReview} alt="" />
              <small>You Rating</small>
              <h1>{inception.Title}</h1>
              <div>
                <input type="number" min="1" max="1000" /> /1000 
              </div>
              <textarea placeholder="Review (Optional)" rows="8" />
              <div>
                <button className='minimal'>Delete</button><button>Save</button>
              </div>
            </RottenReviewStles>
          </Modal>
          <MediaDetail 
            displayModal={displayModal} 
            setDisplayModal={setDisplayModal} 
            media={inception} />
        </section>
      </SectionStyles>
      <NewSectionStyles>
        <MediaInformationWrapper>
          <h2>{inception.Title} Information</h2>
          <p>{inception.mediaDetail.Plot}</p>
          <MediaInformationStyles>
            <li><span>Director</span><div>{inception.Director}</div></li>
            <li><span>Writer</span><div>{inception.mediaDetail.Writer}</div></li>
            <li><span>Cast</span><div>{inception.mediaDetail.Actors}</div></li>
            <li><span>Production</span><div>{inception.mediaDetail.Production}</div></li>
            <li><span>Awards</span><div>{inception.mediaDetail.Awards}</div></li>
            <li><span>BoxOffice</span><div>{inception.mediaDetail.BoxOffice}</div></li>
          </MediaInformationStyles>
        </MediaInformationWrapper>
      </NewSectionStyles>
      <SectionStyles id='rottenGas' orange>
        <section>
          <h2>Rotten Ga&apos;s</h2>
          <ReviewGridStyles>
            {inception.mediaDetail.rottenReviews.map(review => (
              <Review large='false' key={review._id} review={review} />
            ))}
          </ReviewGridStyles>
        </section>
      </SectionStyles>
    </> 
  )
}

export default Media