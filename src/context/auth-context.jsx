import { createContext, useContext } from 'react'

const AuthContext = createContext()

function useAuth() {
  const context = useContext(AuthContext)
  if(context === undefined) {
    throw new Error('useAuth must be used within an AuthContext provider')
  }
  return context
}

export { AuthContext, useAuth }