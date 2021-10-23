import Section from 'components/layout/section'
import { Link } from 'react-router-dom'
import { useRecommendations } from 'utils/recommendations'
import RecommendationsRow from './components/recommendations-row'

const Recommendations = () => {
  const {data} = useRecommendations()
  console.log(data)
  return(
    <Section>
      <h1>Recommendations</h1>
      <ul>
        {data?.pages.map(page =>
          page?.recommendations.map(recommentation =>
            <Link key={recommentation._id} to={`/recommendation/${recommentation._id}`}>
              <RecommendationsRow recommendation={recommentation} />
            </Link>
          )
        )}
      </ul>
    </Section>  
  )
}

export default Recommendations