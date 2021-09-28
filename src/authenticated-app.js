import { Switch, Route } from 'react-router-dom'
import {useProfile} from './utils/profile'
import Home from './pages/Home'
import Media from './pages/Media'
import AddRecommendation from './pages/AddRecommendation'
import Recommendations from './pages/Reccomendations'
import Watchlist from './pages/Watchlist'
import Search from './pages/Search'
import PropTypes from 'prop-types'


function AuthenticatedApp({ user, searchQuery }) {
  // const {data: profile} = useQuery({
  //   queryKey: ['profile', user.profile_id],
  //   // queryFn: () => profileRouter.getProfile(user.profile_id)
  //   queryFn: () => profileRouter.getWatchlist(user.profile_id).then(data => data)
  // })
  const profile = useProfile(user)

  return (
    <Switch>
      <Route path='/search'>
        <Search searchQuery={searchQuery} />
      </Route>
      <Route path='/watchlist'>
        <Watchlist user={user} />
      </Route>
      <Route path='/recommendations' component={Recommendations} />
      <Route path='/add-recommendation' component={AddRecommendation} />
      <Route path='/recommendation/:id' >
        <Media user={user} />
      </Route>
      <Route path='/' component={Home} />
    </Switch>
  )
}

AuthenticatedApp.propTypes = {
  user: PropTypes.object,
  searchQuery: PropTypes.array
}

export default AuthenticatedApp
