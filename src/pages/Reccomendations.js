import { SectionStyles } from '../styles/styles'
import PropTypes from 'prop-types'
import RecommendationsTable from '../components/RecommendationsTable'
import Breadcrumbs from '../components/Breadcrumbs'

const Recommendations = ({ recommendations }) => {
  
  return(
    <>
      <SectionStyles>
        <section>
          <Breadcrumbs 
            routes={[{ path: '/', breadcrumb: 'Home' }, { path: '/recommendations', breadcrumb: 'Recommendations' }]} />
          <h1>Recommendations</h1>
          <RecommendationsTable data={recommendations} />
        </section>
      </SectionStyles>
    </>
  )
}

Recommendations.propTypes = {
  recommendations: PropTypes.array
}

export default Recommendations