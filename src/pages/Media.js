import { useState } from 'react'
import { SectionStyles } from '../styles/styles'
import MediaDetail from '../components/MediaDetail'
import ReviewGridStyles from '../styles/Grids'
import styled from 'styled-components'
import Review from '../components/Review'
import Modal from '../components/modals/Modal'
import RottenReviewModal from '../components/modals/RottenReviewModal'

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

const Media = () => {
  const [displayModal, setDisplayModal] = useState(false)
  return (
    <>
      <SectionStyles>
        <section>
          <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} >
            <RottenReviewModal media={inception} />
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