import PropTypes from 'prop-types'
import { FullPageSpinner } from 'components/lib'
import { createContext, useContext, useEffect } from 'react'
import authRouter from 'utils/auth-provider'
import { useAsync } from 'utils/hooks'
import storage from 'utils/storage'

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext'

function useAuth() {
  const context = useContext(AuthContext)
  if(context === undefined) {
    throw new Error('useAuth must be used within the AuthProvider component')
  }
  return context
}

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
  console.log(user)
  return user
}

const AuthProvider = (props) => {
  console.log(props)
  const {
    data: user, 
    error, 
    isError,
    isIdle,
    isLoading, 
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

  if(isLoading || isIdle) {
    return <FullPageSpinner />
  }

  if (isSuccess) {
    return <AuthContext.Provider value={{login, logout, user}} {...props} />
  }
}

const authHeader = () => {
  const { user: {token} } = useAuth()
  return {
    headers: { Authorization: `bearer ${token}` }
  }
}

AuthProvider.propTypes = {
  children: PropTypes.node
}


export { useAuth, AuthProvider, authHeader }