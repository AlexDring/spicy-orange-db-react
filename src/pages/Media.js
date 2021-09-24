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
import { useQuery } from 'react-query'
import PropTypes from 'prop-types'

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

const Media = ({user}) => {
  const [displayModal, setDisplayModal] = useState(false)
  const id = useParams().id
  
  const { data: recommendation } = useQuery({
    queryKey: ['recommendation', {id}],
    queryFn: () => recommendationRouter.getRecommendation(id).then(data => data)
  })
  
  if(!recommendation|| !recommendation.mediaDetail._id) {
    return null
  } 
  return (
    <>
      <SectionStyles>
        <section>
          <Modal 
            displayModal={displayModal} 
            setDisplayModal={setDisplayModal}>
            <RottenReviewModal 
              user={user}
              displayModal={displayModal}
              setDisplayModal={setDisplayModal}
              media={recommendation} 
            />
          </Modal>
          <MediaDetail 
            user={user}
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
            <MediaInformationLi role={'Director'} item={recommendation.Director}/>
            <MediaInformationLi role={'Writer'} item={recommendation.mediaDetail.Writer}/>
            <MediaInformationLi role={'Cast'} item={recommendation.mediaDetail.Actors}/>
            <MediaInformationLi role={'Production'} item={recommendation.mediaDetail.Production}/>
            <MediaInformationLi role={'Awards'} item={recommendation.mediaDetail.Awards}/>
            <MediaInformationLi role={'Box Office'} item={recommendation.mediaDetail.BoxOffice}/>
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

// eslint-disable-next-line react/prop-types
function MediaInformationLi({role, item}) {
  return(
    ({item} === 'N/A' || undefined) ? null : <li><span>{role}</span><div>{item}</div></li>
  )
}

Media.propTypes = {
  user: PropTypes.object
}

export default Media