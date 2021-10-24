import axios from 'axios'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import { getConfig } from './misc'
const baseUrl = '/api/rottenReviews'

function useReviews() {
  const result = useInfiniteQuery({
    queryKey: 'reviews',
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axios.get(`${baseUrl}?page=${pageParam}`)
      const pagesNo = Math.ceil(response.data.totalReviews/12)
      console.log(pagesNo)
      return {
        reviews: response.data.reviews, 
        totalReviews: response.data.totalReviews, 
        totalPages: pagesNo, 
        nextPage: pageParam + 1 === pagesNo ? undefined : pageParam + 1
      }
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextPage
  })
  return result
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