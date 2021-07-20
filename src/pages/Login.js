import { useState } from 'react'
import loginService from '../services/login'
import recommendationsService from '../services/recommendations'
import { SectionStyles } from '../styles/styles'
import styled from 'styled-components'



const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  label {
    margin: 6px 0;
  }
  button {
    margin-top: 12px;
  }
`

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  console.log(user)

  const userLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({ username, password })
      setUser(user)
      window.localStorage.setItem('SPODbUser', JSON.stringify(user)) 
      recommendationsService.setToken(user.token)
      setUsername('')
      setPassword('')
    } catch(e) {
      console.log('incorrect password or username')
    }
  }


  return(
    <SectionStyles>
      <section>
        <h1>Login</h1>
        <LoginForm onSubmit={userLogin}>
          <label>Username
            <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
          </label>
          <label>Password
            <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          </label>
          <input type='submit' value="Login" />
        </LoginForm>
      </section>
    </SectionStyles>
  )
}

export default Login