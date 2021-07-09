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
import blogService from './services/recommendations'
import { useEffect, useState } from 'react'

function App() {
  const [recommendations, setRecommendations] = useState([])
  useEffect(async () => {
    const response = await blogService.getAll()
    setRecommendations(response)
  }, [setRecommendations])

  // console.log(recommendations)

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Router>
        <Layout>
          <Switch>
            <Route path='/recommendations'>
              <Recommendations />
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
