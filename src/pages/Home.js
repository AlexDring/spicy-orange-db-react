import { SectionStyles } from '../styles/styles'
import ReviewList from '../components/ReviewList'
import MediaList from '../components/MediaList'

const Home = () => {
  return(
    <>
      <SectionStyles>
        <section>
          <h1 style={{'marginBottom': 24}}>Recent Recommendations</h1>
          <MediaList />
        </section>
      </SectionStyles>
      <SectionStyles orange>
        <section>
          <h1 style={{'marginBottom': 24}}>Recent Reviews</h1>
          <ReviewList />
        </section>
      </SectionStyles>
    </>
  )
}

export default Home