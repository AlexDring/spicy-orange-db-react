import axios from 'axios'
import { actions } from 'react-table'
import storage from '../utils/storage'
const baseUrl = '/api/media'

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${storage.getToken()}` }
  }
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
  const response = axios.post(baseUrl, newRec.data, getConfig())
  return response.then(response => response.data)
}

const removeRecommendation = ({media_id, mediaDetail_id}) => {
  axios.delete(`${baseUrl}/${media_id}/${mediaDetail_id}`, getConfig())
}

export default { getAll, getRecommendation, addRecommendation, removeRecommendation }