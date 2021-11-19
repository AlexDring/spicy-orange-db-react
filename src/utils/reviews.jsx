import axios from 'axios'
import { authHeader } from 'context/auth-context'
import toast from 'react-hot-toast'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
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
  const queryClient = useQueryClient()
  return useMutation(
    updates => axios.post(`${baseUrl}/${updates.mediaDetailId}`, updates),
    {
      onSuccess: () => toast.success('Review added!'),
      onSettled: () => queryClient.invalidateQueries('recommendation')
    }
  )
}

function useUpdateReview () {
  const tokenHeader = authHeader()
  console.log(tokenHeader)
  const queryClient = useQueryClient()
  return useMutation(
    updates => axios.put(`${baseUrl}/${updates.mediaDetailId}/${updates.reviewId}`, updates, tokenHeader),
    {
      onSuccess: () => toast.success('Review updated'),
      onSettled: () => queryClient.invalidateQueries('recommendation')
    }
  )
}

function useRemoveReview () {
  const tokenHeader = authHeader()
  const queryClient = useQueryClient()
  return useMutation(
    data => axios.delete(`${baseUrl}/${data.mediaDetailId}/${data.reviewId}`, tokenHeader),
    {onSettled: () => queryClient.invalidateQueries('recommendation')}
  )
}

export {
  useReviews,
  useCreateReview,
  useUpdateReview,
  useRemoveReview
}