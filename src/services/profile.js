import axios from 'axios'
const baseUrl = '/api/profile/'

const getWatchlist = (userId) => {
  const request = axios.get(`${baseUrl}/${userId}/watchlist`)
  console.log(request)
  return request.then(response => response.data)
}

export default { getWatchlist }