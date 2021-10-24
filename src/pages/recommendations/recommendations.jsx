import Section from 'components/layout/section'
import LoadMoreButton from 'components/load-more-button'
import { Link } from 'react-router-dom'
import { useRecommendations } from 'utils/recommendations'
import RecommendationsRow from './components/recommendations-row'

const Recommendations = () => {
  const result = useRecommendations()

  return(
    <Section>
      <h1>Recommendations</h1>
      <ul>
        {result.data?.pages.map(page =>
          page?.recommendations.map(recommentation =>
            <Link key={recommentation._id} to={`/recommendation/${recommentation._id}`}>
              <RecommendationsRow recommendation={recommentation} />
            </Link>
          )
        )}
      </ul>
      {result.isSuccess && <LoadMoreButton result={result} />}
    </Section>  
  )
}

export default Recommendations