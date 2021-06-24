import styled from 'styled-components'


export const SectionStyles = styled.div`
  background: ${props => props.orange ?  '#FFF8ED' : '#FFFDED'};
  section {
    padding: 48px 15px;
    max-width: 970px;
    margin: auto;
  }
`