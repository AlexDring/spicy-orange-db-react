import { 
  Route, 
  Switch } from 'react-router-dom'

import 'normalize.css'
import Home from './pages/Home'
import Media from './pages/Media'
import AddRecommendation from './pages/AddRecommendation'
import Recommendations from './pages/Reccomendations'

import Watchlist from './pages/Watchlist'
import Search from './pages/Search'
// import profileRouter from './services/profile'
// import {useQuery} from 'react-query'
import PropTypes from 'prop-types'


function AuthenticatedApp({ user }) {
  console.log(user)
  // const result = useQuery({
  //   queryKey: ['profile', user.profile_id],
  //   queryFn: () => profileRouter.getProfile(user.profile_id)
  // })
  // console.log(result)

  return (
    <>
      <Switch>
        <Route path='/search'>
          <Search />
        </Route>
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
        {/* <Route path='/login'>
          <Login />
        </Route> */}
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

AuthenticatedApp.propTypes = {
  user: PropTypes.object
}

export default AuthenticatedApp
