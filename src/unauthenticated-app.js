import { SectionStyles } from './styles/styles'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useAsync } from './utils/hooks'
import { ErrorMessage } from './components/lib'

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

const UnauthenticatedApp = ({ login }) => {
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

  console.log(isError, error?.error)

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
        {isError ? <ErrorMessage error={error} /> : null}
      </section>
    </SectionStyles>
  )
}

UnauthenticatedApp.propTypes = {
  login: PropTypes.func
}

export default UnauthenticatedApp