import axios from 'axios'
import { authHeader } from 'context/auth-context'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import { useHistory } from 'react-router'
const baseUrl = '/api/media'

function useRecommendations (query) {
  const searchQuery = query ? query : 'all'
  console.log(searchQuery)
  const result = useInfiniteQuery({
    queryKey: ['recommendations', query], 
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axios.get(`${baseUrl}?page=${pageParam}&title=${searchQuery}`)
      // console.log(`${baseUrl}?page=${pageParam}?title=${searchQuery}`)
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
      onError: err => console.log(err, 'err'), 
      onSuccess: data => {
        queryClient.invalidateQueries('recommendations')
        history.push(`/recommendation/${data.data._id}`)
      }
    }
  )
}

function useRemoveRecommendation(user) {
  const queryClient = useQueryClient()
  return useMutation(
    ({media_id, mediaDetail_id}) => axios.delete(`${baseUrl}/${media_id}/${mediaDetail_id}`,
      authHeader(user.token)),
    {onSuccess: () => queryClient.invalidateQueries('recommendations')}
  )
}

export {
  useRecommendations,
  useRecommendation,
  useAddRecommendation,
  useRemoveRecommendation
}