import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Recommendations from './pages/recommendations/recommendations'
import Watchlist from './pages/watchlist'
import Search from './pages/search/search'
import Recommendation from './pages/recommendation/recommendation'
import Layout from 'components/layout/layout-wrapper'
import { SearchProvider } from 'context/search-context'
import PageNotFound from 'pages/404'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import ProfileRecommendations from 'pages/profile_recommendations'

function AuthenticatedApp() {
  return (
    <SearchProvider>
      <SkipNavLink />
      <Layout>
        <SkipNavContent />
        <AppRoutes /> 
      </Layout>
    </SearchProvider>
  )
}

function AppRoutes() {
  return(
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
      <Route path='/:userId/recommendations' >
        <ProfileRecommendations />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/*'>
        <PageNotFound />
      </Route>
    </Switch>
  )
}

export default AuthenticatedApp
