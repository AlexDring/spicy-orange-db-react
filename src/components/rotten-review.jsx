/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { rottenReviewImage } from 'utils/misc'

const RottenReviewStyles = styled.div`
  display: flex;
  /* align-self: center; */
  text-align: center;
  > div {
    align-self: center;
  }
  img {
    width: 45px;
    margin-right: 6px;
    object-fit: contain;
  }
  span {
    font-weight: 200;
    font-size: 12px;
  }
  @media (max-width: 450px) {
    align-self: center;
    margin-right: 15px;
    width: ${({vertical}) => vertical ? '50px' : 'auto'};
    align-items: center;
    img {
      margin: 0;
      width: 30px;
    }
    span {
      display: none;
    }
  }
`
// 'vertical' prop breaks vertically on mobile.
const RottenReview = ({ rottenAverage, rottenCount, vertical }) => (
  <RottenReviewStyles vertical={vertical}>
    <img src={rottenReviewImage(rottenAverage)}  />
    <div>
      {rottenAverage && 
          <div>{rottenAverage.toFixed()}
            <span>/1000</span>
          </div>}
      {rottenAverage ? 
        <span>{rottenCount} Reviews</span> : 
        <span style={{display: 'block'}}>No reviews</span>
      }
    </div>
  </RottenReviewStyles>
)


export default RottenReview