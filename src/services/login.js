import axios from 'axios'
import storage from '../utils/storage'
const baseUrl = '/api/login'

const getConfig = (token) => {
  return {
    headers: { Authorization: `bearer ${token}` }
  }
}

axios.interceptors.response.use(function (response) { // If token has expired intercept error code and logout
  return response
}, function (error) {
  console.log(error.response.status)
  if (error.response.status === (401 || 500)) {
    storage.logoutUser()
    // window.location.assign(window.location)
    return Promise.reject({message: 'Token is malformed or has expired, please login and re-authenticate.'}) // Need to handle errors.
  }
})

const checkToken = (token) => { 
  const request = axios.get(`${baseUrl}/me`, getConfig(token))
  return request.then(data => data)
}

const login = (user) => {
  const request = axios.post(baseUrl, user)
  return request.then(({data}) => {
    storage.saveToken(data.token)
    return data
  })
}

export default { 
  login, 
  checkToken 
}