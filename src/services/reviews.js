import axios from 'axios'
const baseUrl = '/api/rottenReviews'

const getAllReviews = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

const addNewReview = (newReview) => {
  console.log(newReview, 'newReview')
  const response = axios.post(`${baseUrl}/${newReview.mediaDetailId}`, newReview)
  console.log(response)
  return response.then(response => response.data)
}

export default { getAllReviews, addNewReview }