import { SectionStyles } from '../styles/styles'
import MediaDetail from '../components/MediaDetail'
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

const MediaInformationWrapper = styled.section`
  padding: 0;
  h2 {
    margin-bottom: 12px;
  }
  p {
    max-width: 750px;
  }
`

const MediaInformation = styled.ul`
  li {
    margin-bottom: 16px;
  }
  span {
    font-weight: 700;
    text-transform: uppercase;
    width: 150px;
    display: inline-block;
  }
`

const NewSectionStyles = styled(SectionStyles)`
  section {
    padding-top: 0;
  }
`

const Media = () => {
  return (
    <>
      <SectionStyles>
        <section>
          <MediaDetail media={inception} />
        </section>
      </SectionStyles>
      <NewSectionStyles>
        <MediaInformationWrapper>
          <h2>{inception.Title} Information</h2>
          <p>{inception.mediaDetail.Plot}</p>
          <MediaInformation>
            <li><span>Director</span>{inception.Director}</li>
            <li><span>Writer</span>{inception.mediaDetail.Writer}</li>
            <li><span>Cast</span>{inception.mediaDetail.Actors}</li>
            <li><span>Production</span>{inception.mediaDetail.Production}</li>
            <li><span>Awards</span>{inception.mediaDetail.Awards}</li>
            <li><span>BoxOffice</span>{inception.mediaDetail.BoxOffice}</li>
          </MediaInformation>
        </MediaInformationWrapper>
      </NewSectionStyles>
      <SectionStyles orange>
        <section>
          <div>Reviews</div>
        </section>
      </SectionStyles>
    </> 
  )
}

export default Media