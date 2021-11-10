import PropTypes from 'prop-types'
import { useState } from 'react'
import { useCreateReview, useUpdateReview, useRemoveReview } from 'utils/reviews'
import styled from 'styled-components'
import rottenIcons from 'assets/images/rotten-gas/rottenIcons'
import Modal from 'components/modal-wrapper'

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
  button {
    margin-top: 15px;
  }
`

const RottenReviewModal = ({ recommendation, setDisplayModal, displayModal, user }) => {
  const [review, setReview] = useState(recommendation.mediaDetail.rottenReviews.find(u => u.user === user.username))
  console.log(review)
  const create = useCreateReview()
  const update = useUpdateReview()
  const remove = useRemoveReview()

  function addReviewSubmit(e) {
    e.preventDefault()
    create.mutateAsync({ 
      mediaId: recommendation._id,
      reviewId: review._id,
      mediaDetailId: recommendation.mediaDetail._id,
      score: review.score, 
      review: review.review,  
      title: recommendation.Title,
      poster: recommendation.Poster,
      user: user.username,
      avatar: user.avatar,
      updatedOn: new Date()
    }, {
      onSuccess: ({data}) => setReview(data.rottenReviews.find(u => u.user === user.username))
    })
    setDisplayModal(!displayModal)
  }

  function updateReview(e) {
    e.preventDefault()
    update.mutateAsync({ 
      mediaId: recommendation._id,
      reviewId: review._id,
      mediaDetailId: recommendation.mediaDetail._id,
      score: review.score, 
      review: review.review,
      updatedOn: new Date()
    }, {
      onSuccess: ({data}) => setReview(data.rottenReviews.find(u => u.user === user.username))
    })
    setDisplayModal(!displayModal)
  }

  function removeReview() {
    remove.mutateAsync({mediaDetailId: recommendation.mediaDetail._id, reviewId: review._id})
    setReview(null)
    setDisplayModal(!displayModal)
  }
  console.log(review?._id)
  return(
    <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
      <RottenReviewStyles>
        <img src={rottenIcons.noReview} alt="" />
        <small>You Rating</small>
        <h1>{recommendation.Title}</h1>
        <form onSubmit={review?._id ? updateReview : addReviewSubmit}>
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
          <div>
            <button type="submit">Save</button>
            {review && <button className='minimal' onClick={() => removeReview()}>Delete</button>}
          </div>
        </form>
      </RottenReviewStyles>
    </Modal>
  )
}

RottenReviewModal.propTypes = {
  recommendation: PropTypes.object,
  setDisplayModal: PropTypes.func,
  displayModal: PropTypes.bool,
  user: PropTypes.object
}

export default RottenReviewModal