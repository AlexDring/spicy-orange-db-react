import 'normalize.css'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Media from './pages/Media'
import Recommendations from './pages/Reccomendations'
import GlobalStyles from './styles/GlobalStyles'
import Typography from './styles/Typography'
// import blogService from './services/recommendations'
import { useEffect } from 'react'
import AddRecommendation from './pages/AddRecommendation'
import { selectAllRecommendations, fetchRecommendations } from './reducers/recommendationsSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const recommendations = useSelector(selectAllRecommendations)
  console.log(recommendations)
  // const [recommendations, setRecommendations] = useState([])
  // useEffect(async () => {
  //   const response = await blogService.getAll()
  //   setRecommendations(response)
  // }, [setRecommendations])

  const recommendationStatus = useSelector((state) => state.recommendations.status)

  useEffect(() => {
    if (recommendationStatus === 'idle') {
      dispatch(fetchRecommendations())
    }
  }, [recommendationStatus, dispatch])

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Router>
        <Layout>
          <Switch>
            <Route path='/recommendations'>
              <Recommendations recommendations={recommendations} />
            </Route>
            <Route path='/add-recommendation'>
              <AddRecommendation />
            </Route>
            <Route path='/recommendation/:id'>
              <Media />
            </Route>
            <Route path='/'>
              <Home recommendations={recommendations} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  )
}

export default App
