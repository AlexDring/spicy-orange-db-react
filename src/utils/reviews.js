import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import storage from './storage'
const baseUrl = '/api/rottenReviews'

function getConfig () {
  return {
    headers: { Authorization: `bearer ${storage.getToken()}` }
  }
}

function useCreateReview () {
  const queryClient = useQueryClient()
  return useMutation(
    updates => axios.post(`${baseUrl}/${updates.mediaDetailId}`, updates),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )
}

function useUpdateReview () {
  const queryClient = useQueryClient()
  return useMutation(
    updates => axios.put(`${baseUrl}/${updates.mediaDetailId}/${updates.reviewId}`, updates, getConfig()),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )
}

function useRemoveReview () {
  const queryClient = useQueryClient()
  return useMutation(
    data => axios.delete(`${baseUrl}/${data.mediaDetailId}/${data.reviewId}`, getConfig()),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )
}

export {
  useCreateReview,
  useUpdateReview,
  useRemoveReview
}