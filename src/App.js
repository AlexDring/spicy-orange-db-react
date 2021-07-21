import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom'
import 'normalize.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Media from './pages/Media'
import AddRecommendation from './pages/AddRecommendation'
import Recommendations from './pages/Reccomendations'
import Login from './pages/Login'
import GlobalStyles from './styles/GlobalStyles'
import Typography from './styles/Typography'
import recommendationsService from './services/recommendations'

import { fetchRecommendations } from './reducers/recommendationsSlice'
import { loggedIn } from './reducers/loggedInUserSlice'
import { fetchReviews } from './reducers/reviewSlice'

function App() {
  const dispatch = useDispatch()
  const recommendationStatus = useSelector((state) => state.recommendations.status)
  const reviewStatus = useSelector((state) => state.reviews.status)

  useEffect(() => {
    if (recommendationStatus === 'idle') {
      dispatch(fetchRecommendations())
    }
  }, [recommendationStatus, dispatch])

  useEffect(() => {
    if (reviewStatus === 'idle') {
      dispatch(fetchReviews())
    }
  }, [reviewStatus, dispatch])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('SPODbUser')
    if(loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      dispatch(loggedIn(user))
      recommendationsService.setToken(user.token)
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Router>
        <Layout>
          {/* {!loggedUser ? 
            <Login /> : */}
          <Switch>
            <Route path='/recommendations'>
              <Recommendations />
            </Route>
            <Route path='/add-recommendation'>
              <AddRecommendation />
            </Route>§
            <Route path='/recommendation/:id'>
              <Media />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          {/* } */}
        </Layout>
      </Router>
    </>
  )
}

export default App
