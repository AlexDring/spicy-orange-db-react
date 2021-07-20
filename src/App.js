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
import recommendationsService from './services/recommendations'
import { useEffect } from 'react'
import AddRecommendation from './pages/AddRecommendation'
import { selectAllRecommendations, fetchRecommendations } from './reducers/recommendationsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Login from './pages/Login'
import { useState } from 'react'

function App() {
  const [loggedUser, setLoggedUser] = useState()
  const dispatch = useDispatch()
  const recommendations = useSelector(selectAllRecommendations)
  const recommendationStatus = useSelector((state) => state.recommendations.status)

  useEffect(() => {
    if (recommendationStatus === 'idle') {
      dispatch(fetchRecommendations())
    }
  }, [recommendationStatus, dispatch])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('SPODbUser')
    if(loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setLoggedUser(user)
      recommendationsService.setToken(user.token)
    }
  }, [])

  console.log(loggedUser)
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
            <Route path='/login'>
              <Login />
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
