import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = '/api/profile/'

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${storage.loadUser().token}` }
  }
}

const getProfile = (profileId) => {
  const request = axios.get(`${baseUrl}/${profileId}`)
  return request.then(response => response.data)
}

const getWatchlist = (profileId) => {
  const request = axios.get(`${baseUrl}/${profileId}/watchlist`)
  return request.then(response => response.data)
}

const saveToWatchlist = (item) => {
  const request = axios.post(`${baseUrl}/${item.profileId}/watchlist`, item, getConfig())
  return request.then(response => response.data)
}

const removeFromWatchlist = (item) => {
  console.log(item)
  const request = axios.delete(`${baseUrl}/${item.profileId}/watchlist/${item.watchlistId}`, getConfig())
  return request.then(response => response.data)
}

export default { getWatchlist, saveToWatchlist, removeFromWatchlist, getProfile }