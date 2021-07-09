import PropTypes from 'prop-types'
import styled from 'styled-components'
import rottenIcons from '../../assets/images/rotten-gas/rottenIcons'

const RottenReviewStyles = styled.div`
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

const RottenReviewModal = ({ media }) => {
  return(
    <RottenReviewStyles>
      <img src={rottenIcons.noReview} alt="" />
      <small>You Rating</small>
      <h1>{media.Title}</h1>
      <div>
        <input type="number" min="1" max="1000" /> /1000 
      </div>
      <textarea placeholder="Review (Optional)" rows="8" />
      <div>
        <button className='minimal'>Delete</button><button>Save</button>
      </div>
    </RottenReviewStyles>
  )
}

RottenReviewModal.propTypes = {
  media: PropTypes.object
}

export default RottenReviewModal