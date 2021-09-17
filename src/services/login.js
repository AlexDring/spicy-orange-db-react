import axios from 'axios'
const baseUrl = '/api/login'
const localStorageKey = 'SPODbUser'

axios.interceptors.response.use(function (response) { // If token has expired intercept error code and logout
  return response
}, function (error) {
  console.log(error.response.status)
  if (error.response.status === (500 || 401)) {
    console.log('here')
    logout()
    // window.location.assign(window.location)
    return Promise.reject({message: 'Token is malformed or has expired, please login and re-authenticate.'}) // Need to handle errors.
  }
})

const getConfig = (token) => {
  return {
    headers: { Authorization: `bearer ${token}` }
  }
}

const setLocalUser = (user) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(user)) 
}

const checkToken = (token) => { 
  console.log(token)
  const request = axios.get(`${baseUrl}/me`, getConfig(token))
  return request.then(data => data)
}

function handleUserResponse({data}) {
  console.log('data', data)
  window.localStorage.setItem(localStorageKey, JSON.stringify(data.token))
  return data
}

const getLocalUser = () => {
  const user = window.localStorage.getItem(localStorageKey)
  return JSON.parse(user)
}

const login = (user) => {
  const request = axios.post(baseUrl, user)
  return request.then(data => handleUserResponse(data))
}

const logout = () => {
  window.localStorage.removeItem(localStorageKey)
}

export default { login, logout, getLocalUser, setLocalUser, handleUserResponse, checkToken }