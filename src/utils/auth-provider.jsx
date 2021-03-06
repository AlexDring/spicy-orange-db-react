import axios from 'axios'
import storage from './storage'
const baseUrl = '/api/login'

// axios.interceptors.response.use(function (response) { // If token has expired intercept error code and logout
//   return response
// }, function (error) {
//   if (error.response.status === (401 || 500)) {
//     storage.logoutUser()
//     window.location.assign(window.location)
//     return Promise.reject({message: 'Token is malformed or has expired, please login and re-authenticate.'})
//   }
//   // We really want to throw the error so it is handled and we don't get
//   // an unhandledrejection error. By throwing here, we are handling the
//   // rejection, and bubbling up to the closest error handler (try/catch or
//   // catch method call on a promise).
//   throw error
// })

const client = axios.create({
  baseURL: '/api/login',
  headers: { Authorization: `bearer ${storage.getToken()}` }
})

const checkToken = () => { 
  const response = client.get('/me')
  return response.then(response => {
    return response
  })
}

const login = (user) => {
  const response = axios.post(baseUrl, user)
  return response.then(response => response.data)
}

export default { 
  login, 
  checkToken 
}