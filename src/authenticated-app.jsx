import { Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import Recommendations from './pages/recommendations/recommendations'
import Watchlist from './pages/watchlist'
import Search from './pages/search/search'
import Recommendation from './pages/recommendation/recommendation'

function AuthenticatedApp() {
  return (
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
      <Route path='/recommendation/:id' >
        <Recommendation />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default AuthenticatedApp
