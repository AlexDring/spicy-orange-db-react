import { Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import AddRecommendation from 'pages/AddRecommendation'
import Recommendations from 'pages/Reccomendations'
import Watchlist from 'pages/watchlist'
import Search from 'pages/search/search'
import PropTypes from 'prop-types'
import Recommendation from 'pages/recommendation/recommendation'

function AuthenticatedApp({ user }) {
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
      <Route path='/add-recommendation'>
        <AddRecommendation user={user} />
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
