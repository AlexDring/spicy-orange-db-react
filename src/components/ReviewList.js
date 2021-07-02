import ReviewGridStyles from '../styles/Grids'
import Review from './Review'

const reviews = [
  {
    '_id': '60c71ab94ea7e40e12567b71',
    'mediaDetailId': '60c0a9244fcbb433ce536586',
    'mediaId': '60c0a9244fcbb433ce53658a',
    'user': 'Dank',
    'avatar': 'test.jpg',
    'title': 'Up',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg',
    'score': 789,
    'review': 'Love it',
    '__v': 0
  },
  {
    '_id': '60c71ace4ea7e40e12567b73',
    'mediaDetailId': '60c0a9244fcbb433ce536586',
    'mediaId': '60c0a9244fcbb433ce53658a',
    'user': 'Dank2',
    'avatar': 'test.jpg',
    'title': 'Up',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg',
    'score': 987,
    'review': 'Love it',
    '__v': 0
  },
  {
    '_id': '60db3532f97f998c0e6e7249',
    'mediaDetailId': '60ba24a46960ba215ceabb95',
    'mediaId': '60ba24a46960ba215ceabb99',
    'user': 'Dank2',
    'avatar': 'test.jpg',
    'title': 'Inception',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    'score': 768,
    'review': 'niceeee',
    '__v': 0
  },
  {
    '_id': '60db3538f97f998c0e6e724b',
    'mediaDetailId': '60ba24a46960ba215ceabb95',
    'mediaId': '60ba24a46960ba215ceabb99',
    'user': 'Dank4',
    'avatar': 'test.jpg',
    'title': 'Inception',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    'score': 768,
    'review': 'niceeee',
    '__v': 0
  },
  {
    '_id': '60db353bf97f998c0e6e724d',
    'mediaDetailId': '60ba24a46960ba215ceabb95',
    'mediaId': '60ba24a46960ba215ceabb99',
    'user': 'Dank5',
    'avatar': 'test.jpg',
    'title': 'Inception',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    'score': 768,
    'review': 'niceeee',
    '__v': 0
  },
  {
    '_id': '60db353bf97f998c0e6e724f',
    'mediaDetailId': '60ba24a46960ba215ceabb95',
    'mediaId': '60ba24a46960ba215ceabb99',
    'user': 'Shunt',
    'avatar': 'test.jpg',
    'title': 'The Lord of the Rings: The Fellowship of the Ring',
    'poster': 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    'score': 923,
    'review': 'Simply incredible. Never before have I seen a 3 hour movie that didn\'t seem like 3 hours. I read the Lord of the Rings very recently and I was surprised at how similar Peter Jackson\'s vision was to my own',
    '__v': 0
  }
]

const ReviewList = () => {
  return(
    <ReviewGridStyles>
      {reviews.map(review => (
        <Review large='true' key={review._id} review={review} />
      ))}
    </ReviewGridStyles>
  )
}

export default ReviewList