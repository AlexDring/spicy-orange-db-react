/* eslint-disable react/prop-types */
import styled from 'styled-components'
import reviewLogos from 'assets/images/review-logos/review-icons'

const MediaRatingsStyles = styled.div`
display: flex;
font-size: 14px;
> div {
  display: flex;
&:first-child {
    margin-right: 24px;
    @media (max-width: 500px) {
      margin-right: 12px;
    }
  }
}
img {
  height: 20px;
  margin-right: 6px;
}
`

const ExternalReviews = ({ imdbRating, Metascore }) => {
  const { IMDb, metaCritic } = reviewLogos
  return(
    <MediaRatingsStyles>
      {imdbRating && <SingleReview rating={imdbRating} icon={IMDb} />}
      {Metascore && <SingleReview rating={Metascore} icon={metaCritic} />}
    </MediaRatingsStyles>
  )
}

const SingleReview = ({ rating, icon }) => {
  return(
    <>
      {rating !== 'N/A' ?
        <div>
          <img src={icon}/>
          <p>{rating}</p>
        </div> : '' }
    </>
  )
}

export default ExternalReviews