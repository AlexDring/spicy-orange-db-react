import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import { useAuth } from './context/auth-context'
import { SectionStyles } from './styles/styles'
import { useAsync } from './utils/hooks'

const LoginForm = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
max-width: 300px;
label {
  margin: 6px 0;
}
input[type="submit"] {
  margin-top: 24px;
}
`

const UnauthenticatedApp = () => {
  const { login } = useAuth()
  const { error, isError, run } = useAsync()

  const userLogin = (e) => {
    e.preventDefault()
    const {username, password} = e.target.elements  
    run(
      login({ 
        username: username.value, 
        password: password.value 
      })
    )
  }

  // if(isError) {
  // }

  return(
    <SectionStyles>
      <section>
        <h1>Login</h1>
        <LoginForm onSubmit={userLogin}>
          <label htmlFor="username">Username</label>
          <input type='text' id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <input type='submit' value="Login" />
        </LoginForm>
        {isError && toast.error(error)}
      </section>
    </SectionStyles>
  )
}

UnauthenticatedApp.propTypes = {
  login: PropTypes.func
}

export default UnauthenticatedApp