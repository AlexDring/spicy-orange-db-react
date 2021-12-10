/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useCreateReview, useUpdateReview, useRemoveReview } from 'utils/reviews'
import styled from 'styled-components'
import Dialog from '@reach/dialog'
import { rottenReviewImage } from 'utils/misc'

const RottenReviewStyles = styled.div`
  padding: 75px 24px 24px;
  text-align: center;
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
    width: 95%;
  }
  input:first-child {
    width: 130px;
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

const RottenReviewModal = ({ recommendation, setDisplayModal, displayModal, profile }) => {
  const [review, setReview] = useState(recommendation.mediaDetail.rottenReviews.find(u => u.user === profile.username))

  const create = useCreateReview()
  const update = useUpdateReview()
  const remove = useRemoveReview()

  function addReviewSubmit(e) {
    e.preventDefault()
    create.mutate({ 
      user_id: profile._id,
      mediaId: recommendation._id,
      reviewId: review._id,
      mediaDetailId: recommendation.mediaDetail._id,
      score: review.score, 
      review: review.review,  
      title: recommendation.Title,
      poster: recommendation.Poster,
      user: profile.username,
      avatar: profile.avatar,
      updatedOn: new Date()
    }, {
      onSuccess: ({data}) => setReview(data.rottenReviews.find(u => u.user === profile.username))
    })
    setDisplayModal(!displayModal)
  }

  function updateReview(e) {
    e.preventDefault()
    update.mutate({ 
      mediaId: recommendation._id,
      reviewId: review._id,
      mediaDetailId: recommendation.mediaDetail._id,
      score: review.score, 
      review: review.review,
      updatedOn: new Date()
    }, {
      onSuccess: ({data}) => setReview(data.rottenReviews.find(u => u.user === profile.username))
    })
    setDisplayModal(!displayModal)
  }

  function removeReview() {
    remove.mutate({
      user_id: profile._id,
      mediaDetailId: recommendation.mediaDetail._id, 
      reviewId: review._id
    })
    setReview(null)
    setDisplayModal(!displayModal)
  }

  return(
    <Dialog isOpen={displayModal} onDismiss={() => setDisplayModal(false)} aria-label="review modal">
      <RottenReviewStyles>
        <img src={rottenReviewImage(review?.score)} alt="" />
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
    </Dialog>
  )
}

RottenReviewModal.propTypes = {
  recommendation: PropTypes.object,
  setDisplayModal: PropTypes.func,
  displayModal: PropTypes.bool,
  user: PropTypes.object
}

export default RottenReviewModal