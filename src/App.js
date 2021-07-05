import 'normalize.css'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Media from './pages/Media'
import Recommendations from './pages/Reccomendations'
import GlobalStyles from './styles/GlobalStyles'
import Typography from './styles/Typography'

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout>
        <Router>
          <Switch>
            <Route path='/media'>
              <Media />
            </Route>
            <Route path='/recommendations'>
              <Recommendations />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  )
}

export default App
