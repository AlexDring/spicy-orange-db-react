import { SectionStyles } from '../styles/styles'
import PropTypes from 'prop-types'
import RecommendationsTable from '../components/RecommendationsTable'
import Breadcrumbs from '../components/Breadcrumbs'
import { useQuery } from 'react-query'
import recommendationsRouter from '../services/recommendations'

const Recommendations = () => {
  const {data: recommendations } = useQuery({
    queryKey: ['recommendations'],
    queryFn: () => recommendationsRouter.getAll().then(data => data)
  }) // Hook this up to new table component!!!!
  console.log(recommendations)
  
  return(
    <>
      <SectionStyles>
        <section>
          <Breadcrumbs 
            routes={[{ path: '/', breadcrumb: 'Home' }, { path: '/recommendations', breadcrumb: 'Recommendations' }]} />
          <h1>Recommendations</h1>
          <RecommendationsTable />
        </section>
      </SectionStyles>
    </>
  )
}

Recommendations.propTypes = {
  recommendations: PropTypes.array
}

export default Recommendations