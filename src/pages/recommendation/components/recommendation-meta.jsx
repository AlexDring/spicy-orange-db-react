/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { useProfile } from 'utils/profile'

const RecommendationMetaStyles = styled.div`
  grid-area: meta;
  text-align: center;
  padding: 24px 10px 0;
  border-top: ${props => props.type === 'movie' ? '3px solid #FFB17A' : '3px solid #FCE762'};
  h1 {
    margin-bottom: 12px;
  }
`

const RecommendationMeta = ({ recommendation, remove }) => {
  const { profile } = useProfile()

  return(
    <RecommendationMetaStyles type={recommendation.Type}>
      <small>Added by {recommendation.user}</small>
      {recommendation.user === profile?.username && 
    <button 
      className='minimal'
      style={{padding: 'none', fontSize: 12}} 
      onClick={() => remove.mutate({
        userId: profile._id,
        recommendationId: recommendation._id
      })} 
    >
      Delete
    </button>
      }
      <h1>{recommendation.Title}</h1>
      <p><span style={{'textTransform': 'capitalize'}}>{recommendation.Type}</span> • {recommendation.Year} • {recommendation.Runtime}</p>
    </RecommendationMetaStyles>
  )
}



export default RecommendationMeta