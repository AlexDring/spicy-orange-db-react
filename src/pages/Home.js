import { SectionStyles } from '../styles/styles'
import ReviewList from '../components/ReviewList'
import MediaList from '../components/MediaList'
import PropTypes from 'prop-types'

const Home = () => {
  return(
    <>
      <SectionStyles>
        <section>
          <h1>Recent Recommendations</h1>
          <MediaList />
        </section>
      </SectionStyles>
      <SectionStyles orange>
        <section>
          <h1>Recent Reviews</h1>
          <ReviewList />
        </section>
      </SectionStyles>
    </>
  )
}

Home.propTypes = {
  recommendations: PropTypes.array
}

export default Home