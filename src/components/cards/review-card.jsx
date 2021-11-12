import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { rottenReviewImage } from 'utils/misc'
import { useAuth } from 'context/auth-context'

const ReviewStyles = styled.div`
  display: grid;
  grid-template-columns: ${props => props.large ? '70px 1fr' : '1fr'};
  grid-column-gap: 12px;
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 12px;
  padding-bottom: 12px;
  > img {
    width: 100%;
  }
  h2 {
    display: inline;
    margin-right: 6;
  }
  > p {
    margin-top: 6px;
    grid-column: 1 / -1;
  }
`

const MediaScore = styled.div`
  display: flex;
  align-items: center;
  font-size: 1;
  padding-bottom: 6px;
  > * {
    margin-right: 6px
  }
`

const ReviewCard = ({ large, review }) => {
  const { user: {avatar} } = useAuth()
  
  return (
    <ReviewStyles large={large}>
      {large && <img src={review.poster} alt="" />}
      <div>
        <MediaScore>
          <img height="25" 
            src={avatar}
            alt="Logged in users avatar" />
          <span>{review.user}</span>
          <img height="25" 
            src={rottenReviewImage(review.score)} 
            alt="review score icon" />
          <span>{review.score}<span className="gray" style={{fontSize: 12}}>/1000</span></span>
        </MediaScore>
        {large && 
        <Link to={`/recommendation/${review.mediaId}`}>
          <h3>{review.title}</h3><small>{review.year}</small>
        </Link>}
      </div>
      <p className='mediaReview'>{review.review}</p>
    </ReviewStyles>
  )}

ReviewCard.propTypes = {
  large: PropTypes.bool,
  review: PropTypes.object
}

export default ReviewCard