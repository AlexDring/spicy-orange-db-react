import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './logout-button'
import SignupButton from './signup-button'

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? <LogoutButton /> : <SignupButton />
}

export default AuthenticationButton