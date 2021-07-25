/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SectionStyles } from '../styles/styles'
import MediaDetail from '../components/MediaDetail'
import ReviewGridStyles from '../styles/Grids'
import styled from 'styled-components'
import Review from '../components/Review'
import Modal from '../components/modals/Modal'
import RottenReviewModal from '../components/modals/RottenReviewModal'
import recommendationRouter from '../services/recommendations'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleRecommendation, selectAllRecommendations } from '../reducers/recommendationsSlice'
import { useEffect } from 'react'

const MediaInformationWrapper = styled.section`
  padding: 0;
  p {
    max-width: 750px;
  }
`

const MediaInformationStyles = styled.ul`
  li {
    margin-bottom: 16px;
  }
  span {
    font-weight: 700;
    text-transform: uppercase;
    width: 150px;
    float: left;
    display: block;
  }
  div { 
    overflow: hidden;
  }
`

const NewSectionStyles = styled(SectionStyles)`
  section {
    padding-top: 0;
  }
`

const Media = () => {
  const [displayModal, setDisplayModal] = useState(false)
  const dispatch = useDispatch()
  const id = useParams().id
  const recommendation = useSelector(state => state.recommendations.data.find(rec => rec._id === id))

  useEffect(() => {
    // Check that recommendation has loaded and that media detail hasn't been fetched already
    if(recommendation && typeof recommendation.mediaDetail == 'string') {
      console.log('useEffect Runs')
      dispatch(fetchSingleRecommendation(id))
    }
  }, [recommendation])

  if(!recommendation|| !recommendation.mediaDetail._id) {
    return null
  } 
  return (
    <>
      <SectionStyles>
        <section>
          <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} >
            <RottenReviewModal displayModal={displayModal} setDisplayModal={setDisplayModal} media={recommendation} />
          </Modal>
          <MediaDetail 
            displayModal={displayModal} 
            setDisplayModal={setDisplayModal} 
            media={recommendation} />
        </section>
      </SectionStyles>
      <NewSectionStyles>
        <MediaInformationWrapper>
          <h2>{recommendation.Title} Information</h2>
          <p>{recommendation.mediaDetail.Plot}</p>
          <MediaInformationStyles>
            <li><span>Director</span><div>{recommendation.Director}</div></li>
            <li><span>Writer</span><div>{recommendation.mediaDetail.Writer}</div></li>
            <li><span>Cast</span><div>{recommendation.mediaDetail.Actors}</div></li>
            <li><span>Production</span><div>{recommendation.mediaDetail.Production}</div></li>
            <li><span>Awards</span><div>{recommendation.mediaDetail.Awards}</div></li>
            <li><span>BoxOffice</span><div>{recommendation.mediaDetail.BoxOffice}</div></li>
          </MediaInformationStyles>
        </MediaInformationWrapper>
      </NewSectionStyles>
      <SectionStyles id='rottenGas' orange>
        <section>
          <h2>Rotten Ga&apos;s</h2>
          <ReviewGridStyles>
            {recommendation.mediaDetail.rottenReviews.map(review => (
              <Review large='false' key={review._id} review={review} />
            ))}
          </ReviewGridStyles>
        </section>
      </SectionStyles>
    </> 
  )
}

export default Media