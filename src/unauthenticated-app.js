import { SectionStyles } from './styles/styles'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  const userLogin = async (e) => {
    e.preventDefault()
    const {username, password} = e.target.elements  

    login({ 
      username: username.value, 
      password: password.value 
    })
  }


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
      </section>
    </SectionStyles>
  )
}

UnauthenticatedApp.propTypes = {
  login: PropTypes.func
}

export default UnauthenticatedApp