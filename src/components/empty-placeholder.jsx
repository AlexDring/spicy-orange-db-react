/* eslint-disable react/prop-types */
import styled from 'styled-components'

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

export default EmptyPlaceholder