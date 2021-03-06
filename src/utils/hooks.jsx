import { useAuth0 } from '@auth0/auth0-react'
import { 
  useLayoutEffect, 
  useReducer, 
  useCallback, 
  useEffect, 
  useRef, 
  useState } from 'react'


function useSafeDispatch(dispatch) {
  const mounted = useRef(false)
  useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])
  return useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}

// Example usage:
// const {data, error, status, run} = useAsync()
// useEffect(() => {
//   run(fetchPokemon(pokemonName))
// }, [pokemonName, run])
const defaultInitialState = {status: 'idle', data: null, error: null}
function useAsync(initialState) {
  const initialStateRef = useRef({
    ...defaultInitialState,
    ...initialState,
  })
  const [{status, data, error}, setState] = useReducer(
    (s, a) => ({...s, ...a}),
    initialStateRef.current,
  )

  const safeSetState = useSafeDispatch(setState)

  const setData = useCallback(
    data => safeSetState({data, status: 'resolved'}),
    [safeSetState],
  )
  const setError = useCallback(
    error => safeSetState({error, status: 'rejected'}),
    [safeSetState],
  )
  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState],
  )

  const run = useCallback(
    promise => {
      if (!promise || !promise.then) {
        throw new Error(
          'The argument passed to useAsync().run must be a promise. Maybe a function that\'s passed isn\'t returning anything?',
        )
      }
      safeSetState({status: 'pending'})
      return promise.then(
        data => {
          setData(data)
          return data
        },
        error => { // This is the Epic React useAsync hook. The error needs to be caught to avoid 'Unhandled Rejection (Error)'
          if(error.response) {
            console.log('this1')
            setError(error.response.data.error ? error.response.data.error : error.response.data)
          } else {
            console.log('this2')
            setError(error)
          }
        },
      )
    },
    [safeSetState, setData, setError],
  )

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  }
}

const useToken = () => {
  const [token, setToken] = useState()
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    (async () => {
      setToken(await getAccessTokenSilently())
    })()
  }, [getAccessTokenSilently])

  return token
}

const useAuthHeader = () => {
  const token = useToken()

  return {
    headers: { Authorization: `bearer ${token}` }
  }
}

const useUserId = () => {
  const { user, isAuthenticated } = useAuth0()
  if (isAuthenticated) return user['https://spicy-orange.co.uk/db_id']
}


export { useAsync, useToken, useAuthHeader, useUserId }

