/* eslint-disable react/prop-types */
import reviewLogos from 'assets/images/review-logos/review-icons'
import styled from 'styled-components'

const ThirdPartyReviewsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding-bottom: 24px;
  flex-wrap: wrap;
  img {
    margin-right: 6px;
  }
  > li {
    display: flex;
    list-style: none;
    align-items: center;
    :nth-child(-n + 2) {
      margin-right: 36px;
      @media (max-width: 600px) {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 0;
    justify-content: space-evenly;
    img {
      margin-bottom: 6px;
    }
    > li {
      flex-direction: column;
      align-items: center;
    }
  }
`

const ThirdPartyReviews = ({ recommendation }) => (
  <ThirdPartyReviewsWrapper>
    {recommendation.mediaDetail.Ratings.map(r => 
      (<li key={r._id}>
        <img 
          src={
            r.Source === 'Internet Movie Database' ? reviewLogos.IMDbColor : 
              r.Source === 'Rotten Tomatoes' ? reviewLogos.rottenToms : 
                r.Source === 'Metacritic' ? reviewLogos.metaCriticColor : 
                  null
          }  
          alt="" />
        <p>{r.Value}
        </p>
      </li>)
    )}
  </ThirdPartyReviewsWrapper>
)

export default ThirdPartyReviews