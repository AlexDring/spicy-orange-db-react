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
    list-style: none;
    a {
      display: flex;
      align-items: center;
    }
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
    > li {
      flex-direction: column;
      align-items: center;
    }
  }
`

const ThirdPartyReviews = ({ recommendation }) => ( 
  <ThirdPartyReviewsWrapper>
    {recommendation.Ratings.map(r => 
      (<li key={r._id}>
        <a 
          href={
            r.Source === 'Internet Movie Database' ? `https://www.imdb.com/title/${recommendation.imdbID}` : 
              r.Source === 'Rotten Tomatoes' ? `https://www.rottentomatoes.com/search?search=${recommendation.Title}` : 
                r.Source === 'Metacritic' ? `https://www.metacritic.com/search/all/${recommendation.Title}/results` : 
                  null }  target='_blank' rel='noopener noreferrer'>
          <img 
            src={
              r.Source === 'Internet Movie Database' ? reviewLogos.IMDbColor : 
                r.Source === 'Rotten Tomatoes' ? reviewLogos.rottenToms : 
                  r.Source === 'Metacritic' ? reviewLogos.metaCriticColor : 
                    null }  
            alt="" />
          <span>{r.Value}
          </span>
        </a>
      </li>
      )
    )}
  </ThirdPartyReviewsWrapper>
)

export default ThirdPartyReviews