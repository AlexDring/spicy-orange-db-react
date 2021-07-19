import styled from 'styled-components'

export const MediaCardGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 30px;
`

export const SectionStyles = styled.div`
  background: ${props => props.orange ?  '#FFF8ED' : '#FFFDED'};
  section {
    padding: 48px 15px;
    max-width: 970px;
    margin: auto;
  }
`