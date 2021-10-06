import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getConfig } from './misc'
const baseUrl = '/api/rottenReviews'

function useReviews() {
  const result = useQuery({
    queryKey: 'reviews',
    queryFn: () => axios.get(baseUrl).then(response => response.data)
  })
  console.log({...result, reviews: result.data})
  return {...result, reviews: result.data}
}

function useCreateReview () {
  const queryClient = useQueryClient()
  return useMutation(
    updates => axios.post(`${baseUrl}/${updates.mediaDetailId}`, updates),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )
}

function useUpdateReview (user) {
  const queryClient = useQueryClient()
  return useMutation(
    updates => axios.put(`${baseUrl}/${updates.mediaDetailId}/${updates.reviewId}`, updates, getConfig(user.token)),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )
}

function useRemoveReview (user) {
  const queryClient = useQueryClient()
  return useMutation(
    data => axios.delete(`${baseUrl}/${data.mediaDetailId}/${data.reviewId}`, getConfig(user.token)),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )
}

export {
  useReviews,
  useCreateReview,
  useUpdateReview,
  useRemoveReview
}