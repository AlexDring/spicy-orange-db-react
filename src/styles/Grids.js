import styled from 'styled-components'

const ReviewGridStyles = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-gap: 24px;
align-items: baseline;
`

const MediaCardGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 15px;
`

const MediaPosterGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  grid-auto-rows: 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 15px;
  margin-top: 30px;
`
export {
  ReviewGridStyles,
  MediaCardGridStyles,
  MediaPosterGridStyles
}