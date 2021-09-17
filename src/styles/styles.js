import styled from 'styled-components'

export const MediaCardGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 30px;
`

export const MediaPosterGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  grid-auto-rows: 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 15px;
  margin-top: 30px;
`

export const SectionStyles = styled.div`
  background: ${props => props.orange ?  '#FFF8ED' : '#FFFDED'};
  section {
    padding: 48px 15px;
    max-width: 970px;
    margin: auto;
  }
`