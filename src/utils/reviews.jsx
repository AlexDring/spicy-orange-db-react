import axios from 'axios'
import toast from 'react-hot-toast'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import { useAuthHeader } from './hooks'
const baseUrl = '/api/rottenReviews'

function useReviews() {
  const result = useInfiniteQuery({
    queryKey: 'reviews',
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axios.get(`${baseUrl}?page=${pageParam}`)
      const pagesNo = Math.ceil(response.data.totalReviews/12)
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
  const tokenHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation(
    review => axios.post(`${baseUrl}/${review.recommendationDetailId}`, review, tokenHeader),
    {
      onSuccess: () => toast.success('Review added!'),
      onError: () => toast.error('Oops something went wrong.'),
      onSettled: () => queryClient.invalidateQueries('recommendations')
    }
  )
}

function useUpdateReview () {
  const tokenHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation(
    updates => axios.put(`${baseUrl}/${updates.recommendationDetailId}/${updates.reviewId}`, updates, tokenHeader),
    {
      onSuccess: () => toast.success('Review updated'),
      onError: () => toast.error('Oops something went wrong.'),
      onSettled: () => queryClient.invalidateQueries('recommendations')
    }
  )
}

function useRemoveReview () {
  const tokenHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation(
    data => axios.delete(`${baseUrl}/${data.recommendationDetailId}/${data.reviewId}`, tokenHeader),
    {
      onSuccess: () => toast.success('Review deleted'),
      onError: () => toast.error('Oops something went wrong.'),
      onSettled: () => queryClient.invalidateQueries('recommendations')
    }
  )
}

export {
  useReviews,
  useCreateReview,
  useUpdateReview,
  useRemoveReview
}