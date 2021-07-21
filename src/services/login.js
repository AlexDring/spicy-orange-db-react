import axios from 'axios'
const baseUrl = '/api/login'

const login = (user) => {
  console.log(user)
  const request = axios.post(baseUrl, user)
  return request.then(r => r.data)
}

export default { login }