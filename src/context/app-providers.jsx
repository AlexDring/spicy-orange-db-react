import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient, QueryCache } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from 'context/auth-context'
import { ErrorBoundary } from 'react-error-boundary'
import toast, { Toaster } from 'react-hot-toast'
import GlobalStyles from 'styles/GlobalStyles'
import Typography from 'styles/Typography'
import { Auth0Provider } from '@auth0/auth0-react'
import Auth0ProviderWithHistory from 'auth/auth0-provider-with-history'

function AppProviders({ children }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry(failureCount, error) {
          if (error.status === 404) return false
          else if (failureCount < 2) return true
          else return false
        }
      },
      mutations: {
        onError: (err, variables, recover) => 
          typeof recover === 'function' ? recover() : null // If mutation has recovery function on error, call it.
      }
    },
    queryCache: new QueryCache({
      onError: (error) =>
        toast.error(`Something went wrong: ${error.message}`),
    }),
  })


  const errorFallback = ({error, resetErrorBoundary}) => {
    // const message = error.response.data.error ? error.response.data.error : error.message
    // console.log('geeraosndmpoasdjkpoaskdpok')
    // return(
    //   <Section>
    //     <div>Oops, there was an error: {' '}
    //       <pre style={{whiteSpace: 'normal'}}>{message}</pre>
    //       <button onClick={resetErrorBoundary}>Try again</button>
    //     </div>
    //   </Section>
    // )
    toast.error('Oops, something went wrong.')
  }

  return(
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Typography /> 
      <Router>
        <ErrorBoundary FallbackComponent={errorFallback}>
          <Auth0Provider>
            <Auth0ProviderWithHistory>
              {/* <AuthProvider> */}
              {children}
              {/* </AuthProvider> */}
            </Auth0ProviderWithHistory>
          </Auth0Provider>
          <Toaster />
        </ErrorBoundary>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.node
}

export default AppProviders