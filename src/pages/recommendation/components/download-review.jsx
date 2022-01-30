/* eslint-disable react/prop-types */
import { ReviewCard } from 'components/cards'
import RecommendationMeta from 'components/recommendation-meta'
import { forwardRef, useEffect, useRef } from 'react'
import { exportComponentAsJPEG } from 'react-component-export-image'
import styled from 'styled-components'
import { rottenReviewImage } from 'utils/misc'
import ThirdPartyReviews from './third-party-review'

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

const RottenHeaderStyles = styled.div`
  h1 {
    margin-bottom: 0;
  }
  ul {
    display: inline-flex;
    margin-bottom: 24px;
  }
`

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

const ReviewStyles = styled.div`
  padding: 15px;
  width: 500px;
  background: var(--light-yellow)
`

// eslint-disable-next-line react/display-name
const Reviews = forwardRef((props, ref) => (
  <ReviewStyles ref={ref}>
    <Test {...props} />
  </ReviewStyles>
))

const Test = (props) => {
  return(
    <>
      <RottenHeaderStyles style={{textAlign: 'center'}}>
        <h1>{props.recommendation.Title}</h1>
        <RecommendationMeta meta={[props.recommendation.Type, props.recommendation.Year, props.recommendation.Runtime]} />
      </RottenHeaderStyles>
      <ThirdPartyReviews recommendation={props.recommendation} />
      <RottenWrapper>
        <RottenScoreStyles>
          <small>Rotten Ga&apos;s Total</small>
          <img src={rottenReviewImage(props.recommendation.rottenAverage)} alt="" />
          {(props.recommendation.rottenCount !== undefined && props.recommendation.rottenCount !== 0) ? 
            <>
              <div>{props.recommendation.rottenAverage.toFixed()}/1000</div>
              <small>{props.recommendation.rottenCount} Reviews</small>
            </> : 
            <small>No Ratings</small>
          }
        </RottenScoreStyles>
        <RottenScoreStyles onClick={() => props.onClick ? props.onClick : null}>
          <small>{props.review?.user}&apos;s Rating</small>
          <img src={rottenReviewImage(props.review?.score)} alt="" />
          <div>{props.review?.score.toFixed()}/1000</div>
        </RottenScoreStyles>
      </RottenWrapper>
      {props.review && <ReviewCard review={props.review} />}
    </>
  )
}

const DownloadReview = (props) => {
  const componentRef = useRef()

  useEffect(() => {
    if(props.review) {
      exportComponentAsJPEG(componentRef)
      props.setDownloadData(null)
    }
  }, [props])

  return (
    <>
      <Reviews ref={componentRef} {...props} />
    </>
  )
}

export default DownloadReview