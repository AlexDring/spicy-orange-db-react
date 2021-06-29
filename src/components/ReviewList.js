import styled from 'styled-components'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import avatar from '../assets/images/avatar.png'
import PropTypes from 'prop-types'

const ReviewStyles = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-column-gap: 12px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 12px;
  padding-bottom: 12px;
  .mediaPoster {
    width: 100%;
  }
  .mediaScore {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    > * {
      margin-right: 6px
    }
  }
  .mediaTitle {
    display: inline;
    margin-right: 6;
  }
  .mediaReview {
    grid-column: 1 / -1;
  }
`

const ReviewGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`

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
    'review': 'niceeee123',
    '__v': 0
  }
]

const SingleReview = (props) => {
  const { review  } = props
  console.log(props)
  return(
    <ReviewStyles>
      <img className='mediaPoster' src={review.poster} alt="" />
      <div className='mediaMeta'>
        <div className='mediaScore'>
          <img height="25" 
            src={avatar}
            alt="Logged in users avatar" />
          <p>{review.user}</p>
          <img height="25" 
            src={
              review.score > 899 ? rottenIcons.certifiedGa 
                : review.score > 599 ? rottenIcons.freshGa 
                  : rottenIcons.rottenGa} 
            alt="review score icon" />
          <p>{review.score}/1000</p>
        </div>
        <h2 className='mediaTitle'>{review.title}</h2><small>{review.year}</small>
      </div>
      <p className='mediaReview'>{review.review}</p>
    </ReviewStyles>
  )
}

const ReviewList = () => {
  return(
    <ReviewGridStyles>
      {reviews.map(review => (
        <SingleReview key={review._id} review={review} />
      ))}
    </ReviewGridStyles>
  )
}

SingleReview.propTypes = {
  review: PropTypes.object
}

export default ReviewList