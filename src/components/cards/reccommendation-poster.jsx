/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { rottenReviewImage } from 'utils/misc'

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
  > img {
    height: 314px;
    width: 100%;
    object-fit: cover;
    
  }
`

const RottenGaStyles = styled.div`
    display: flex;
    padding-top: 10px;
    img {
      height: 40px;
      margin: 0 10px;
    }
    span {
      font-size: 12px;
      margin-right: 6px;
    }
    @media (max-width: 500px) {
      padding: 0;
      small {
        display: block;
      }
      p {
        margin: 6px;
      }
    }
`

const RecommendationPosterCard = ({ data }) => {
  return(
    <RecommendationPosterStyles type={data.Type}>
      <img src={data.Poster} />
      <div>
        <h4>{data.Title}</h4>
        <small>{data.Year} • {data.Type}</small>
        {data.rottenCount ? 
          ( // This hides it if it's being used in a search results page
            <RottenGaStyles className='rottenGas'>
              <img className='rottenIcon' 
                src={rottenReviewImage(data.rottenAverage)}  
                alt="" /> 
              {!data.rottenAverage ? <small>Not yet rated</small> : 
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                  <p style={{fontSize: 14}}>{data.rottenAverage}<small>/1000</small></p>
                  <small>{data.rottenCount} Reviews</small>
                </div>}
            </RottenGaStyles>
          ) 
          : null}
      </div>
    </RecommendationPosterStyles>
  )
}

export default RecommendationPosterCard