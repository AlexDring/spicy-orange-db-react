import axios from 'axios'
const baseUrl = '/api/omdb'

const searchOMDb = (query) => {
  console.log(query)
  const response = axios.get(`${baseUrl}/${query}`)
  return response.then(r => r.data)
}

export default { searchOMDb }