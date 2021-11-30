import { 
  useLayoutEffect, 
  useReducer, 
  useCallback, 
  useEffect, 
  useRef, 
  useState } from 'react'
import toast from 'react-hot-toast'

// export const useWindowSize = () => {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   })
  
//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       })
//     }
  
//     // Add event listener
//     window.addEventListener('resize', handleResize)
  
//     // Call handler right away so state gets updated with initial window size
//     handleResize()
  
//     // Remove event listener on cleanup
//     return () => window.removeEventListener('resize', handleResize)
//   }, []) // Empty array ensures that effect is only run on mount
  
//   return windowSize
// }


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

export {useAsync}

