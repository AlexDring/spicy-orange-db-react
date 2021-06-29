import styled from 'styled-components'
import MediaCard from './MediaCard'
import MediaPoster from './MediaPoster'

const MediaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
  grid-gap: 30px;
`

const media = [
  {
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
    'mediaDetail': '60ba24a46960ba215ceabb95',
    '__v': 0,
    'rottenAverage': 921,
    'rottenCount': 3
  },
  {
    '_id': '60c0a9244fcbb433ce53658a',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg',
    'Title': 'Up',
    'Type': 'movie',
    'Year': '2009',
    'Runtime': '96 min',
    'Director': 'Pete Docter, Bob Peterson(co-director)',
    'Genre': 'Animation, Adventure, Comedy, Family',
    'Language': 'English',
    'Metascore': '88',
    'imdbRating': '8.2',
    'user': 'Dringer',
    'mediaDetail': '60c0a9244fcbb433ce536586',
    '__v': 0,
    'rottenAverage': 599,
    'rottenCount': 2
  },
  {
    '_id': '60daf4aaf97f998c0e6e723e',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BYjIyOGU1NzAtODZmYi00NGMzLWJiMjItNGNjNTFjOTM5ZDJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
    'Title': 'Mare of Easttown',
    'Type': 'series',
    'Year': '2021',
    'Runtime': '403 min',
    'Director': 'N/A',
    'Genre': 'Crime, Drama, Mystery',
    'Language': 'English',
    'Metascore': 'N/A',
    'imdbRating': '8.6',
    'user': 'Dringer',
    'mediaDetail': '60daf4aaf97f998c0e6e723c',
    'rottenAverage': 888,
    'rottenCount': 4,
    '__v': 0
  },
  {
    '_id': '60dafa9ff97f998c0e6e7243',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BOTNjZDA2NDMtNzU3My00YWMzLWI4NDQtNDkyZGMzMzkyODA0XkEyXkFqcGdeQXVyNzU4ODEwNDI@._V1_SX300.jpg',
    'Title': 'Mouthpiece',
    'Type': 'movie',
    'Year': '2018',
    'Runtime': '91 min',
    'Director': 'Patricia Rozema',
    'Genre': 'Drama',
    'Language': 'English',
    'Metascore': '73',
    'imdbRating': '6.4',
    'user': 'Dringer',
    'mediaDetail': '60dafa9ff97f998c0e6e723f',
    'rottenAverage': 888,
    'rottenCount': 4,
    '__v': 0
  },
  {
    '_id': '60dafb42f97f998c0e6e7248',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_SX300.jpg',
    'Title': 'Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan',
    'Type': 'movie',
    'Year': '2006',
    'Runtime': '84 min',
    'Director': 'Larry Charles',
    'Genre': 'Comedy',
    'Language': 'English, Romanian, Hebrew, Polish, Armenian',
    'Metascore': '89',
    'imdbRating': '7.3',
    'user': 'Dringer',
    'mediaDetail': '60dafb42f97f998c0e6e7244',
    'rottenAverage': 589,
    'rottenCount': 4,
    '__v': 0
  },
  {
    '_id': '60dafa9ff97f998c0e6e7244',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BOTNjZDA2NDMtNzU3My00YWMzLWI4NDQtNDkyZGMzMzkyODA0XkEyXkFqcGdeQXVyNzU4ODEwNDI@._V1_SX300.jpg',
    'Title': 'Mouthpiece',
    'Type': 'movie',
    'Year': '2018',
    'Runtime': '91 min',
    'Director': 'Patricia Rozema',
    'Genre': 'Drama',
    'Language': 'English',
    'Metascore': '73',
    'imdbRating': '6.4',
    'user': 'Dringer',
    'mediaDetail': '60dafa9ff97f998c0e6e723f',
    'rottenAverage': 921,
    'rottenCount': 4,
    '__v': 0
  },
  {
    '_id': '60dafa9ff97f998c0e6e7244',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BOTNjZDA2NDMtNzU3My00YWMzLWI4NDQtNDkyZGMzMzkyODA0XkEyXkFqcGdeQXVyNzU4ODEwNDI@._V1_SX300.jpg',
    'Title': 'Mouthpiece',
    'Type': 'movie',
    'Year': '2018',
    'Runtime': '91 min',
    'Director': 'Patricia Rozema',
    'Genre': 'Drama',
    'Language': 'English',
    'Metascore': '73',
    'imdbRating': '6.4',
    'user': 'Dringer',
    'mediaDetail': '60dafa9ff97f998c0e6e723f',
    'rottenAverage': 921,
    'rottenCount': 4,
    '__v': 0
  },
  {
    '_id': '60dafa9ff97f998c0e6e7244',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BOTNjZDA2NDMtNzU3My00YWMzLWI4NDQtNDkyZGMzMzkyODA0XkEyXkFqcGdeQXVyNzU4ODEwNDI@._V1_SX300.jpg',
    'Title': 'Mouthpiece',
    'Type': 'movie',
    'Year': '2018',
    'Runtime': '91 min',
    'Director': 'Patricia Rozema',
    'Genre': 'Drama',
    'Language': 'English',
    'Metascore': '73',
    'imdbRating': '6.4',
    'user': 'Dringer',
    'mediaDetail': '60dafa9ff97f998c0e6e723f',
    'rottenAverage': 921,
    'rottenCount': 4,
    '__v': 0
  },
]

const highlightedMedia = media.slice(0, 6)
const remainingMedia = media.slice(4)

console.log(remainingMedia)

const MediaList = () => {
  return(
    <>
      <MediaGridStyles>
        {highlightedMedia.map(singleMedia => (
          <MediaCard key={singleMedia._id} singleMedia={singleMedia} />
        ))}
      </MediaGridStyles>
      <div style={{'display': 'flex', 'justifyContent': 'space-between', 'marginTop': 30, 'flexWrap': 'wrap'}}>
        {remainingMedia.map(singleMedia => (
          <MediaPoster key={singleMedia._id} poster={singleMedia.Poster} rottenAverage={singleMedia.rottenAverage} rottenCount={singleMedia.rottenCount} />
        ))}
      </div>
    </>
  )
}

export default MediaList