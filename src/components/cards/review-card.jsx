import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { rottenReviewImage } from 'utils/misc'
import spicyLogo from 'assets/images/spicy-orange-logo.png'
import { AiFillSave } from 'react-icons/ai'

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
    white-space: pre-wrap;
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
  button {
    padding: 0;
    margin: 0;
    background: none;
    color: var(--navy);
  }
`

// eslint-disable-next-line react/prop-types
const ReviewCard = ({ large, review, setDownloadData }) => {
  return (
    <ReviewStyles large={large}>
      {large && <img src={review.poster} alt="" />}
      <div>
        <MediaScore>
          <img height="25" 
            src={review?.avatar ? review?.avatar : spicyLogo}
            alt="Logged in users avatar" />
          <Link to={`/${review.user}/profile`}><span className='capitalise'>{review.user}</span></Link>
          <img height="25" 
            src={rottenReviewImage(review.score)} 
            alt="review score icon" />
          <span>{review.score}<span className="gray" style={{fontSize: 12}}>/1000</span></span>
          {setDownloadData && 
          <button onClick={() => setDownloadData(review)}>
            <AiFillSave />
          </button>}
        </MediaScore>
        {large && 
        <Link to={`/recommendation/${review.recommendationId}`}>
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