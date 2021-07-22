import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import rottenIcons from '../../assets/images/rotten-gas/rottenIcons'
import { selectUser } from '../../reducers/loggedInUserSlice'
import { addReview } from '../../reducers/reviewSlice'

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
  input:first-child {
    width: 100px;
    margin-bottom: 24px;
    font-size: 36px;
  }
  input[type=submit] {
    text-align: right;
    margin: 24px 0 auto;
  }
`


const RottenReviewModal = ({ media, setDisplayModal, displayModal }) => {
  const dispatch = useDispatch()
  const [score, setScore] = useState(0)
  const [review, setReview] = useState('')
  const loggedUser = useSelector(selectUser)
  // console.log(score, 'score')
  // console.log(review, 'review')

  const addReviewSubmit = async(e) => {
    e.preventDefault()
    const scoreNum = parseInt(score)
    const resultAction = await dispatch(addReview({ 
      mediaId: media._id,
      mediaDetailId: media.mediaDetail._id,
      score: scoreNum, 
      review,  
      title: media.Title,
      poster: media.Poster,
      user: loggedUser.username,
      avatar: loggedUser.avatar
    }))
    setDisplayModal(!displayModal)
    console.log('added!!!')
    console.log(resultAction)
  }
  console.log(media.mediaDetail._id)

  return(
    <RottenReviewStyles>
      <img src={rottenIcons.noReview} alt="" />
      <small>You Rating</small>
      <h1>{media.Title}</h1>
      <form onSubmit={addReviewSubmit}>
        <input value={score} onChange={({ target }) => setScore(target.value)} type="number" min="1" max="1000" /> /1000 
        <textarea value={review} onChange={({ target }) => setReview(target.value)} placeholder="Review (Optional)" rows="8" />
        <input type='submit' className='minimal' value='Delete' /><input type='submit' value='Save' />
      </form>
    </RottenReviewStyles>
  )
}

RottenReviewModal.propTypes = {
  media: PropTypes.object,
  setDisplayModal: PropTypes.func,
  displayModal: PropTypes.bool
}

export default RottenReviewModal