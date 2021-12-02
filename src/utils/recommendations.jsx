import axios from 'axios'
import { authHeader } from 'context/auth-context'
import toast from 'react-hot-toast'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import { useHistory } from 'react-router'
const baseUrl = '/api/media'

function useRecommendations (query) {
  const searchQuery = query ? query : 'all'
  const result = useInfiniteQuery({
    queryKey: ['recommendations', query], 
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axios.get(`${baseUrl}?page=${pageParam}&title=${searchQuery}`)
      const pagesNo = Math.ceil(response.data.totalRecommendations/12)
      return {
        recommendations: response.data.recommendations, 
        totalResults: response.data.totalRecommendations, 
        totalPages: pagesNo, 
        nextPage: pageParam + 1 === pagesNo ? undefined : pageParam + 1
      }
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextPage
  })

  return result
}

function useRecommendation(id) {
  const result = useQuery({
    queryKey: ['recommendation', id],
    queryFn: () => axios.get(`${baseUrl}/${id}`).then(response => response.data)
  })
  return {...result, recommendation: result.data}
}

function useAddRecommendation() {
  const tokenHeader = authHeader()
  const queryClient = useQueryClient()
  const history = useHistory()

  return useMutation(
    recommendation => axios.post(baseUrl, recommendation, tokenHeader),
    {
      onError: err => {
        if(err.response.data) {
          toast.error(err.response.data.error)
        } else {
          toast.error(err)
        }
      }, 
      onSuccess: data => {
        toast.success('Recommendation added!')
        queryClient.invalidateQueries('recommendations')
        history.push(`/recommendation/${data.data._id}`)
      }
    }
  )
}

function useRemoveRecommendation() {
  const queryClient = useQueryClient()
  const tokenHeader = authHeader()
  const history = useHistory()

  return useMutation(
    ({media_id, mediaDetail_id}) => axios.delete(`${baseUrl}/${media_id}/${mediaDetail_id}`, tokenHeader),
    {
      onSuccess: () => {
        toast('Recommendation removed', { icon: '😭' })
        queryClient.invalidateQueries('recommendations')
        history.push('/recommendations')
      },
      onError: (error) => toast.error(error.response.data.error)
    }
  )
}

export {
  useRecommendations,
  useRecommendation,
  useAddRecommendation,
  useRemoveRecommendation
}