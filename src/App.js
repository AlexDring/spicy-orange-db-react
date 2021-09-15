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
import Watchlist from './pages/Watchlist'
import { fetchProfile } from './reducers/profileSlice'

function App() {
  const dispatch = useDispatch()
  const recommendationStatus = useSelector((state) => state.recommendations.status)
  const reviewStatus = useSelector((state) => state.reviews.status)
  console.log(typeof(dispatch))

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
    console.log('loggedInUSer useEffect runs')
    const loggedInUserJSON = window.localStorage.getItem('SPODbUser')
    console.log(typeof(loggedInUserJSON))

    if(loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      console.log(typeof(user))
      dispatch(loggedIn(user))
      recommendationsService.setToken(user.token)
      console.log('user.profile_id', user.profile_id)
      dispatch(fetchProfile(user.profile_id))
    }
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Router>
        <Layout>
          {/* {!loggedUser ? 
            <Login /> : */}
          <Switch>
            <Route path='/watchlist'>
              <Watchlist />
            </Route>
            <Route path='/recommendations'>
              <Recommendations />
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
