import axios from 'axios'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import { useHistory } from 'react-router'
import { getConfig } from './misc'
const baseUrl = '/api/media'

function useRecommendations () {
  const result = useInfiniteQuery({
    queryKey: 'recommendations', 
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axios.get(`${baseUrl}?page=${pageParam}`)
      const pagesNo = Math.ceil(response.data.totalRecommendations/10)
      console.log(response.data)
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

function useAddRecommendation(user) {
  const queryClient = useQueryClient()
  const history = useHistory()
  return useMutation(
    recommendation => axios.post(baseUrl, recommendation, getConfig(user.token)),
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
      getConfig(user.token)),
    {onSuccess: () => queryClient.invalidateQueries('recommendations')}
  )
}

export {
  useRecommendations,
  useRecommendation,
  useAddRecommendation,
  useRemoveRecommendation
}