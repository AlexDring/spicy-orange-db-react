/* eslint-disable react/prop-types */

import styled from 'styled-components'

const RecommendationMetaStyles = styled.ul`
  display: flex;
  text-transform: capitalize;
  li + li:before {
    content: '•';
    margin: 0 3px;
  }
`

const RecommendationMeta = ({ meta }) => {
  console.log(meta)
  return(
    <RecommendationMetaStyles>
      {meta.map((meta, i) => 
        meta !== 'N/A' ? 
          <li key={i}>{meta}</li> : 
          null)
      }
    </RecommendationMetaStyles>
  )
}

export default RecommendationMeta

