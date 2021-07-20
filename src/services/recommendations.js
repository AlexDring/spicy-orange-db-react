import axios from 'axios'
const baseUrl = '/api/media'

const getAll = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

const getRecommendation = (id) => {
  const response = axios.get(`${baseUrl}/${id}`)
  return response.then(response => response.data)
}

const addRecommendation = (newRec) => {
  const response = axios.post(baseUrl, newRec)
  return response.then(response => response.data)
}

export default { getAll, getRecommendation, addRecommendation }