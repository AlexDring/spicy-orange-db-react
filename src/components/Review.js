import PropTypes from 'prop-types'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import avatar from '../assets/images/avatar.png'
import styled from 'styled-components'

const ReviewStyles = styled.div`
  display: grid;
  grid-template-columns: ${props => props.large === 'true' ? '70px 1fr' : '1fr'};
  grid-column-gap: 12px;
  border-bottom: 1px solid #ededed;
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
    font-size: 0.9em;
    padding-bottom: 6px;
    > * {
      margin-right: 6px
    }
  `

const Review = (props) => {
  const { large, review } = props
  return(
    <ReviewStyles large={large}>
      {large  === 'true' && <img src={review.poster} alt="" />}
      <div>
        <MediaScore>
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
        </MediaScore>
        {large == 'true' && <><h2>{review.title}</h2><small>{review.year}</small></>}
      </div>
      <p className='mediaReview'>{review.review}</p>
    </ReviewStyles>
  )
}

Review.propTypes = {
  large: PropTypes.string,
  review: PropTypes.object
}

export default Review