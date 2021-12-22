/* eslint-disable react/prop-types */
import ExternalReviews from 'components/external-reviews'
import RecommendationMeta from 'components/recommendation-meta'
import RottenReview from 'components/rotten-review'
import styled from 'styled-components'
import { borderColor, convertDate } from 'utils/misc'

const RecRowWrapper = styled.div`
  display: flex;
  min-height: 130px;
  background: white;
  padding: 0 24px;
  border-top: 1px solid var(--light-gray);
  border-left: ${props => borderColor(props.type)};
  > div:nth-child(n + 1):nth-child(-n + 3) {
    padding: 24px 0;
  }
  > img {
    padding-right: 24px;
    align-self: center;
    max-height: 110px;
    /* min-width: 98.8167px; */
    max-width: 100px;
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
      min-width: 0;
    }
    > div:last-of-type {
      flex-direction: column  ;
      order: -1;
    }
  } 
`

const InfoStyles = styled.div`
  flex: 3;
  > ul:first-of-type {
    padding: 5px 0;
  }
`

const GenreStyles = styled.div`
  flex: 2;
  font-size: 14px;
  font-weight: 200;
  p:nth-child(1n + 0) {
    margin-bottom: 5px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`

const RecommendationsRow = ({ recommendation }) => {
  const { Type, Poster, Title, Year, Runtime, imdbRating, Metascore, Director, Genre, rottenAverage, rottenCount, user, dateAdded } = recommendation

  return(
    <RecRowWrapper type={Type}>
      <img src={Poster} />
      <InfoStyles>
        <h3>{Title} <span>({Year})</span></h3>
        <RecommendationMeta meta={[Type, Runtime]} />
        <ExternalReviews imdbRating={imdbRating} Metascore={Metascore} />
      </InfoStyles>
      <GenreStyles>
        {Director !== 'N/A' && <p>Director: {Director}</p>} 
        <p>{Genre}</p>
        <p>Added by {user} {convertDate(dateAdded)}</p>
      </GenreStyles>
      <RottenReview rottenAverage={rottenAverage} rottenCount={rottenCount} vertical />
    </RecRowWrapper>
  )
}

export default RecommendationsRow