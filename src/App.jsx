import '@reach/skip-nav/styles.css'
import { Switch, Route } from 'react-router-dom'
import { SearchProvider } from 'context/search-context'
import { useAuth0 } from '@auth0/auth0-react'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'
import { FullPageSpinner } from 'components/lib'
import Layout from 'components/layout/layout-wrapper'
import AuthenticationButton from 'components/auth/authentication-button'
import Home from './pages/home'
import Recommendations from './pages/recommendations/recommendations'
import Watchlist from './pages/watchlist'
import Search from './pages/search/search'
import Recommendation from './pages/recommendation/recommendation'
import PageNotFound from 'pages/404'
import ProfileRecommendations from 'pages/profile_recommendations'
import ProfileReviews from 'pages/profile_reviews'
import ProtectedRoute from 'auth/protected-route'


function App() {
  const { isLoading } = useAuth0()
  
  if(isLoading) {
    return <FullPageSpinner />
  }
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

export default App
