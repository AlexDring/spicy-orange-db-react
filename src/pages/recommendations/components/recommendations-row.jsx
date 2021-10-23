/* eslint-disable react/prop-types */
import ExternalReviews from 'components/external-reviews'
import styled from 'styled-components'
import { rottenReviewImage } from 'utils/misc'

const RecRowWrapper = styled.div`
  display: flex;
  min-height: 130px;
  background: white;
  padding: 0 24px;
  border-top: 1px solid var(--light-gray);
  border-left: 3px solid var(--orange);
  > div:nth-child(1n + 1) {
    padding: 24px 0;
  }
  > img {
    padding-right: 24px;
    align-self: center;
    max-height: 110px;
  }
  h3 {
    margin-bottom: 0;
    span {
      font-family: 'Poppins';
      font-size: 14px;
      font-weight: 200
    }
  }
  @media (max-width: 450px) {
    padding: 15px;
    > img {
      margin: 0 10px 0 0;
      padding-right: 6px;
    }
  } 
`

const InfoStyles = styled.div`
  flex: 3;
  > div:first-of-type {
    padding: 5px 0;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 200;
  }
`

const GenreStyles = styled.div`
  flex: 2;
  font-size: 14px;
  font-weight: 200;
  @media (max-width: 450px) {
    display: none;
  }
`
const RottenReviewStyles = styled.div`
  display: flex;
  margin-left: auto;
  align-self: center;
  @media (max-width: 450px) {
    flex-direction: column  ;
    order: -1;
    align-self: center;
    span {
      display: none;
    }
  }
`

const RecommendationsRow = ({ recommendation }) => {
  return(
    <RecRowWrapper>
      <img src={recommendation.Poster} />
      <InfoStyles>
        <h3>{recommendation.Title} <span>({recommendation.Year})</span></h3>
        <div>{recommendation.Type} • {recommendation.Runtime !== 'N/A' && recommendation.Runtime}</div>
        <ExternalReviews imdbRating={recommendation.imdbRating} Metascore={recommendation.Metascore} />
      </InfoStyles>
      <GenreStyles>
        {/* {recommendation.Director !== 'N/A' && <div style={{marginBottom: 5}}>Director: {recommendation.Director}</div>}  */}
        {recommendation.Genre}
      </GenreStyles>
      <RottenReviewStyles>
        {recommendation.rottenAverage && 
          <img
            style={{paddingRight: 15, objectFit: 'contain'}} 
            width={40} 
            src={rottenReviewImage(recommendation.rottenAverage)} 
            alt="" />
        }
        <div>
          {recommendation.rottenAverage && <div>{recommendation.rottenAverage.toFixed()}<span style={{fontWeight: 200, fontSize: 12}}>/1000</span></div>}
          {recommendation.rottenAverage ? 
            <span style={{fontWeight: 200, fontSize: 12, textAlign: 'center'}}>{recommendation.rottenCount} Reviews</span> : 
            <span>No Reviews</span>
          }
        </div>
      </RottenReviewStyles>
    </RecRowWrapper>
  )
}

export default RecommendationsRow