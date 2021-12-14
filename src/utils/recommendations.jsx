import axios from 'axios'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import { useHistory } from 'react-router'
import { useAuthHeader } from './hooks'
const baseUrl = '/api/media'

function useRecommendations (query) {
  const result = useInfiniteQuery(recommendationsConfig(query))
  return result
}

const recommendationsConfig = (query) => {
  const searchQuery = query ? query : 'all'
  return {
    queryKey: ['recommendations', searchQuery], 
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
  }
}

function useRecommendation(id) {
  const result = useQuery({
    queryKey: ['recommendation', id],
    queryFn: () => axios.get(`${baseUrl}/${id}`).then(response => response.data)
  })
  return {...result, recommendation: result.data}
}

function useAddRecommendation() {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  const history = useHistory()

  return useMutation(
    recommendation => axios.post(baseUrl, recommendation, authHeader),
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
  const authHeader = useAuthHeader()
  const history = useHistory()

  return useMutation(
    ({media_id, mediaDetail_id}) => axios.delete(`${baseUrl}/${media_id}/${mediaDetail_id}`, authHeader),
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

const useRefetchRecommendations = () => {
  const queryClient = useQueryClient()
  queryClient.removeQueries(['recommendations'])
  return useCallback(
    async function refetchRecommendations() {
      queryClient.removeQueries(['recommendations'])
      await queryClient.prefetchInfiniteQuery(recommendationsConfig())
    },
    [queryClient]
  )
}

export {
  useRecommendations,
  useRecommendation,
  useAddRecommendation,
  useRemoveRecommendation,
  useRefetchRecommendations
}