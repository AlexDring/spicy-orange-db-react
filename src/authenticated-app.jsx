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
import ProfileReviews from 'pages/profile_reviews'
import AuthenticationButton from 'components/auth/authentication-button'
import ProtectedRoute from 'auth/protected-route'

function AuthenticatedApp() {
  return (
    <SearchProvider>
      <SkipNavLink />
      <Layout>
        <SkipNavContent />
        <AuthenticationButton />
        <AppRoutes /> 
      </Layout>
    </SearchProvider>
  )
}

function AppRoutes() {
  return(
    <Switch>
      <ProtectedRoute path='/search' component={Search} />
      <ProtectedRoute path='/watchlist' component={Watchlist} />
      <ProtectedRoute path='/recommendations' component={Recommendations} />
      <ProtectedRoute path='/recommendation/:id'  component={Recommendation} />
      <ProtectedRoute path='/:userId/recommendations' component={ProfileRecommendations} />
      <ProtectedRoute path='/:userId/reviews' component={ProfileReviews} />
      <ProtectedRoute exact path='/' component={Home} />
      <Route path='/*' component={PageNotFound} />
    </Switch>
  )
}

export default AuthenticatedApp
