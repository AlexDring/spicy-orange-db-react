import axios from 'axios'
const baseUrl = '/api/rottenReviews'

const getAllReviews = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

export default { getAllReviews }