import MediaCard from '../components/MediaCard'
import { SectionStyles } from '../styles/styles'
import styled from 'styled-components'

const MediaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(470px, 1fr));
  grid-gap: 30px;
`

const Home = () => {
  return(
    <>
      <SectionStyles>
        <section>
          <MediaGridStyles >
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </MediaGridStyles>
        </section>
      </SectionStyles>
      <SectionStyles orange>
        <section>
          <h2>Yes!!!</h2>
        </section>
      </SectionStyles>
    </>
  )
}

export default Home