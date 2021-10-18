import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css'
import Typography from './styles/Typography'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/layout/layout-wrapper'
import authRouter from './utils/login'
import storage from './utils/storage'
import { ErrorBoundary } from 'react-error-boundary'
import AuthenticatedApp from './authenticated-app'
import UnauthenticatedApp from './unauthenticated-app'
import { useAsync } from './utils/hooks'
import { FullPageSpinner, ErrorMessage } from 'components/lib'
import Section from 'components/layout/section'

const errorFallback = ({error, resetErrorBoundary}) => {
  return(
    <Section>
      <div>Oops, there was an error: {' '}
        <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </Section>
  )}

async function getUser() {
  let user = null
  const token = await storage.getToken()
  if(token) {  
    const {data} = await authRouter.checkToken(token)
    user = {
      ...data,
      token
    }
  }
  return user
}

function App() {
  const {
    data: user, 
    error, 
    isLoading, 
    isError,
    isSuccess,
    run,
    setData 
  } = useAsync()

  useEffect(() => {
    run(getUser())
  }, [run])

  const login = form => authRouter.login(form)
    .then(user => {
      storage.saveToken(user.token)
      setData(user)
    })

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
          {isLoading ? <FullPageSpinner /> :
            isError ? 
              <ErrorMessage 
                error={error} 
                messge="There &apos;s an error, try refreshing the app." 
              /> :
              isSuccess ? (
                user ? (
                  <ErrorBoundary FallbackComponent={errorFallback}>
                    <AuthenticatedApp user={user} logout={logout} />
                  </ErrorBoundary>
                ) :
                  <UnauthenticatedApp login={login} />
              ) : null
          }
        </Layout> 
      </Router>
    </>
  )
}

export default App