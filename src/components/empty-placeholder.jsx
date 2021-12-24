import styled from 'styled-components'
import PropTypes from 'prop-types'

const EmptyPlaceholderStyles = styled.div`
display: flex;
flex-direction: column;
padding: 24px;
align-items: center;
> div {
  padding-top: 12px;
  text-align: center;
}
`

function EmptyPlaceholder ({ icon, text }) {
  return(
    <EmptyPlaceholderStyles>
      {icon}
      <div>
        {text}
      </div>
    </EmptyPlaceholderStyles>
  )
}

EmptyPlaceholder.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.object
}

export default EmptyPlaceholder