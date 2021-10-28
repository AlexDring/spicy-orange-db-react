import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Home from './pages/home'
import Recommendations from './pages/recommendations/recommendations'
import Watchlist from './pages/watchlist'
import Search from './pages/search/search'
import Recommendation from './pages/recommendation/recommendation'
import { useContext } from 'react'
import { AuthContext } from 'context/auth-context'

function AuthenticatedApp() {
  const { user } = useContext(AuthContext)
  return (
    <Switch>
      <Route path='/search'>
        <Search user={user} />
      </Route>
      <Route path='/watchlist'>
        <Watchlist user={user} />
      </Route>
      <Route path='/recommendations'>
        <Recommendations />
      </Route>
      <Route path='/recommendation/:id' >
        <Recommendation user={user} />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

AuthenticatedApp.propTypes = {
  user: PropTypes.object
}

export default AuthenticatedApp
