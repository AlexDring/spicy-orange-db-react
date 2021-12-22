/* eslint-disable react/prop-types */
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { rottenReviewImage } from 'utils/misc'
import RottenReviewModal from './rotten-review-modal'
import { useProfile } from 'utils/profile'

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
    height: 100px;
    margin-bottom: 12px;
  }
`

const RottenReviews = ({ recommendation }) => {
  const {profile} = useProfile()
  const [displayModal, setDisplayModal] = useState(false)
  const userScore = recommendation.recommendationDetail.rottenReviews?.find(review => review.user === profile.username)

  return (
    <>
      <RottenReviewModal
        recommendation={recommendation}
        profile={profile}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal} 
      />
      <RottenWrapper>
        <HashLink to='#rotten-gas'>
          <RottenScoreStyles>
            <small>Rotten Ga&apos;s Total</small>
            <img src={rottenReviewImage(recommendation.rottenAverage)} alt="" />
            {(recommendation.rottenCount !== undefined && recommendation.rottenCount !== 0) ? 
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
          <img src={rottenReviewImage(userScore?.score)} alt="" />
          {userScore ? 
            <>
              <div>{userScore.score.toFixed()}/1000</div>
            </> : <div>Click to rate.</div> 
          }
        </RottenScoreStyles>
      </RottenWrapper>
    </>
  )
}

export default RottenReviews