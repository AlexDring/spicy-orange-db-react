import axios from 'axios'
const baseUrl = '/api/rottenReviews'
import storage from '../utils/storage'

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${storage.getToken()}` }
  }
}

const getAllReviews = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

const addNewReview = (newReview) => {
  console.log(newReview, 'newReview')
  const response = axios.post(`${baseUrl}/${newReview.mediaDetailId}`, newReview)
  return response.then(response => response.data)
}

const updateReview = (updatedReview) => {
  console.log(updatedReview, 'updatedReview')
  const response = axios.put(`${baseUrl}/${updatedReview.mediaDetailId}/${updatedReview.reviewId}`, updatedReview, getConfig())
  return response.then(response => response.data)
}

const removeReview = (review) => {
  console.log(review)
  const response = axios.delete(`${baseUrl}/${review.mediaDetailId}/${review.reviewId}`, getConfig())
  return response
}

export default { getAllReviews, addNewReview, updateReview, removeReview }