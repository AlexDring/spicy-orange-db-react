import axios from 'axios'
const baseUrl = '/api/media'

let token = null
const setToken = newToken => {  
  token = `bearer ${newToken}`
}

const getAll = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

const getRecommendation = (id) => {
  const response = axios.get(`${baseUrl}/${id}`)
  return response.then(response => response.data)
}

const addRecommendation = (newRec) => {
  const config = {    
    headers: { Authorization: token },  
  }
  const response = axios.post(baseUrl, newRec, config)
  return response.then(response => response.data)
}

export default { getAll, getRecommendation, addRecommendation, setToken }