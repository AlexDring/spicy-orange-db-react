import { Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import Media from 'pages/Media'
import AddRecommendation from 'pages/AddRecommendation'
import Recommendations from 'pages/Reccomendations'
import Watchlist from 'pages/Watchlist'
import Search from 'pages/Search'
import PropTypes from 'prop-types'

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
        <Media user={user} />
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
