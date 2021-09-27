import PropTypes from 'prop-types'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import reviewRouter from '../../services/reviews'
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


const RottenReviewModal = ({ media, setDisplayModal, displayModal, user }) => {
  const queryClient = useQueryClient()

  const [review, setReview] = useState(media.mediaDetail.rottenReviews.find(u => u.user === user.username))

  const create = useMutation(
    updates => reviewRouter.addNewReview(updates)
      .then(data => 
        setReview(data.rottenReviews.find(u => u.user === user.username))),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )

  const update = useMutation(
    updates => reviewRouter.updateReview(updates).then(data => {
      console.log(data)
      setReview(data.rottenReviews.find(u => u.user === user.username))
    }),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )

  const remove = useMutation(
    remove => reviewRouter.removeReview(remove),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )

  function addReviewSubmit(e) {
    e.preventDefault()
    create.mutate({ 
      mediaId: media._id,
      reviewId: review._id,
      mediaDetailId: media.mediaDetail._id,
      score: review.score, 
      review: review.review,  
      title: media.Title,
      poster: media.Poster,
      user: user.username,
      avatar: user.avatar
    })
    setDisplayModal(!displayModal)
  }

  function removeReview() {
    remove.mutate({mediaDetailId: media.mediaDetail._id, reviewId: review._id})
    setReview(null)
    setDisplayModal(!displayModal)
  }

  function updateReview() {
    update.mutate({ 
      mediaId: media._id,
      reviewId: review._id,
      mediaDetailId: media.mediaDetail._id,
      score: review.score, 
      review: review.review,  
    })
    setDisplayModal(!displayModal)
  }

  return(
    <RottenReviewStyles>
      <img src={rottenIcons.noReview} alt="" />
      <small>You Rating</small>
      <h1>{media.Title}</h1>
      <form>
        <input
          type="number"
          min="1"
          max="1000"
          value={review?.score ? review.score : ''}
          onChange={({ target }) => setReview({...review, score: target.value })} 
        /> /1000 
        <textarea
          placeholder="Review (Optional)"
          rows="8"
          value={review?.review ? review.review : ''}
          onChange={({ target }) => setReview({...review, review: target.value })}
        />
      </form>
      {review?._id ? // Check review exists
        <button onClick={updateReview}>Update</button> : 
        <button onClick={addReviewSubmit}>Save</button>
      }
      {review && <button className='minimal' onClick={() => removeReview()} >Delete</button>}
    </RottenReviewStyles>
  )
}

RottenReviewModal.propTypes = {
  media: PropTypes.object,
  setDisplayModal: PropTypes.func,
  displayModal: PropTypes.bool,
  user: PropTypes.object
}

export default RottenReviewModal