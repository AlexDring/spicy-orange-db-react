import styled from 'styled-components'
import PropTypes from 'prop-types'

const RecommendationMetaStyles = styled.ul`
  display: flex;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 200;
  flex-wrap: wrap;
  li + li:before {
    content: '•';
    margin: 0 3px;
  }
`

const RecommendationMeta = ({ meta }) => {

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


RecommendationMeta.propTypes = {
  meta: PropTypes.array
}

export default RecommendationMeta

