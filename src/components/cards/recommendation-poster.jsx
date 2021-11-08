/* eslint-disable react/prop-types */
import RecommendationMeta from 'components/recommendation-meta'
import RottenReview from 'components/rotten-review'
import styled from 'styled-components'
import { borderColor } from 'utils/misc'
import searchPlaceholder from '../../assets/images/search-placeholder.png'

const RecommendationPosterStyles = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover; 
  }
  > div {
    background-color: white;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--lighter-gray);
    border-top: ${props => borderColor(props.type)};
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
`

const RecommendationPosterCard = ({ data }) => {
  const { Poster, Title, Year, Type, rottenCount, rottenAverage } = data
  return(
    <RecommendationPosterStyles type={Type}>
      <img src={Poster !== 'N/A' ? Poster : searchPlaceholder} />
      <div>
        <h4>{Title}</h4>
        <RecommendationMeta meta={[Type, Year]} />
        {rottenCount ? 
          <RottenReview rottenAverage={rottenAverage} rottenCount={rottenCount} />
          : null}
      </div>
    </RecommendationPosterStyles>
  )
}

export default RecommendationPosterCard