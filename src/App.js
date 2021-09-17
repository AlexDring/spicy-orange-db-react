import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css'

import Typography from './styles/Typography'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/Layout'
import {FullPageSpinner} from './components/lib'

import authRouter from './services/login'
import storage from './utils/storage'
import AuthenticatedApp from './authenticated-app'
import UnauthenticatedApp from './unauthenticated-app'
import {useAsync} from './utils/hooks'

async function getUser () {
  let user = null
  const token = await storage.getToken()
  if(token) {  
    const data = await authRouter.checkToken(token)
    user = data.data
  }
  return user
}

function App() {
  const {
    data: user, 
    error, 
    isLoading, 
    isIdle,
    isError,
    isSuccess,
    run,
    setData} = useAsync()

  useEffect(() => {
    run(getUser())
  }, [run])

  const login = form => authRouter.login(form).then(user => setData(user))
  const logout = () => {
    storage.logoutUser()
    setData(null)
  }

  return (
    <>
      <GlobalStyles />
      <Typography /> 
      <Router>
        <Layout>
          {isLoading || isIdle ? <FullPageSpinner /> :
            isError ? 
              <div>
                <p>There &apos;s an error, try refreshing the app.</p>
                <pre>{error.message}</pre>
              </div> :
              isSuccess ? (
                user ? 
                  <AuthenticatedApp user={user} logout={logout} /> :
                  <UnauthenticatedApp login={login} />
              ) : null }
        </Layout> 
      </Router>
    </>
  )
}

export default App
