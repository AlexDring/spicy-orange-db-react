import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useHistory } from 'react-router'
import storage from './storage'
const baseUrl = '/api/media'

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${storage.getToken()}` }
  }
}

function useRecommendations () {
  const result = useQuery({
    queryKey: 'recommendations',
    queryFn: () => axios.get(baseUrl).then(response => response.data)
  })
  return {...result, recommendations: result.data}
}

function useRecommendation(id) {
  const result = useQuery({
    queryKey: ['recommendation', id],
    queryFn: () => axios.get(`${baseUrl}/${id}`).then(response => response.data)
  })
  return {...result, recommendation: result.data}
}

function useAddRecommendation () {
  const queryClient = useQueryClient()
  const history = useHistory()
  return useMutation(
    recommendation => axios.post(baseUrl, recommendation, getConfig()),
    {
      onError: err => console.log(err, 'err'), 
      onSuccess: data => {
        queryClient.invalidateQueries('recommendations')
        history.push(`/recommendation/${data.data._id}`)
      }
    }
  )
}

function useRemoveRecommendation () {
  const queryClient = useQueryClient()
  return useMutation(
    ({media_id, mediaDetail_id}) => axios.delete(`${baseUrl}/${media_id}/${mediaDetail_id}`, getConfig()),
    {onSuccess: () => queryClient.invalidateQueries('recommendations')}
  )
}

export {
  useRecommendations,
  useRecommendation,
  useAddRecommendation,
  useRemoveRecommendation
}