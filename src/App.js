import 'normalize.css'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
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
