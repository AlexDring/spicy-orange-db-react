import axios from 'axios'
import { getConfig } from '../utils/misc'
import storage from '../utils/storage'
const baseUrl = '/api/login'

// axios.interceptors.response.use(function (response) { // If token has expired intercept error code and logout
//   return response
// }, function (error) {
//   if (error.response.status === (401 || 500)) {
//     storage.logoutUser()
//     window.location.assign(window.location)
//     return Promise.reject({message: 'Token is malformed or has expired, please login and re-authenticate.'}) // Need to handle errors.
//   }
//   console.log(error)
//   return Promise.reject(error)
// })

const client = axios.create({
  baseURL: '/api/login',
  headers: { Authorization: `bearer ${storage.getToken()}` }
})

const checkToken = () => { 
  const response = client.get('/me')
  return response.then(data => data)
}

const login = (user) => {
  const response = axios.post(baseUrl, user)
  return response.then(response => response.data)
}

export default { 
  login, 
  checkToken 
}