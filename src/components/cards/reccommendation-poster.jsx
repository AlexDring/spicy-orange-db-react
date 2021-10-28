/* eslint-disable react/prop-types */
import RecommendationMeta from 'components/recommendation-meta'
import RottenReview from 'components/rotten-review'
import styled from 'styled-components'

const RecommendationPosterStyles = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  > div {
    background-color: white;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--lighter-gray);
    border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
  }
  > div:last-of-type {
    font-size: 14px;
    > ul {
      margin: 5px 0;
    }
    img {
      height: 40px;
      @media (max-width: 500px) {
        margin-right: 5px;
      }
    }
  }
  > img {
    height: 314px;
    width: 100%;
    object-fit: cover; 
  }
`

const RecommendationPosterCard = ({ data }) => {
  const { Poster, Title, Year, Type, rottenCount, rottenAverage } = data
  return(
    <RecommendationPosterStyles type={Type}>
      <img src={Poster} />
      <div>
        <h4>{Title}</h4>
        <RecommendationMeta meta={[Year, Type]} />
        {rottenCount ? 
          <RottenReview rottenAverage={rottenAverage} rottenCount={rottenCount} />
          : null}
      </div>
    </RecommendationPosterStyles>
  )
}

export default RecommendationPosterCard