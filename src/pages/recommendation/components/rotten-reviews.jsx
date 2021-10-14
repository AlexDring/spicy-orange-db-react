/* eslint-disable react/prop-types */
import { HashLink } from 'react-router-hash-link'
import { rottenReviewImage } from 'utils/misc'
import styled from 'styled-components'
import RottenReviewModal from './rotten-review-modal'
import { useState } from 'react'

const RottenWrapper = styled.div`
  grid-area: rottenGas;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  div:first-child {
    margin-right: 60px;
  }
`
const RottenScoreStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  small {
    margin-bottom: 6px;
  }
  img {
    height: 140px;
    margin-bottom: 12px;
  }
`

const RottenReviews = ({ recommendation, user }) => {
  const [displayModal, setDisplayModal] = useState(false)

  const userScore = recommendation.mediaDetail.rottenReviews.find(review => review.user === user.username)
  return (
    <>
      <RottenReviewModal recommendation={recommendation} user={user} displayModal={displayModal} setDisplayModal={setDisplayModal} />
      <RottenWrapper>
        <HashLink to='#rottenGas'>
          <RottenScoreStyles>
            <small>Rotten Ga&apos;s Total</small>
            <img src={rottenReviewImage(recommendation.rottenAverage)} alt="" />
            {recommendation.rottenCount !== 0 ? 
              <>
                <div>{recommendation.rottenAverage}/1000</div>
                <small>{recommendation.rottenCount} Reviews</small>
              </> : 
              <small>No Ratings</small>
            }
          </RottenScoreStyles>
        </HashLink>
        <RottenScoreStyles onClick={() => setDisplayModal(!displayModal)}>
          <small>Your Rating</small>
          {userScore ? 
            <>
              <img src={rottenReviewImage(userScore.score)} alt="" />
              <div>{userScore.score}/1000</div>
            </> : <div>Click to rate.</div> 
          }
        </RottenScoreStyles>
      </RottenWrapper>
    </>
  )
}

export default RottenReviews