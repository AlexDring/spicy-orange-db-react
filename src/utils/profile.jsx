import axios from 'axios'
import { useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useAuthHeader, useUserId, useToken } from './hooks'
const baseUrl = '/api/users'

function useProfile() {
  const user_id = useUserId()
  const result = useQuery({
    queryKey: ['profile', {user_id}],
    queryFn: () => axios.get(`${baseUrl}/${user_id}`).then(response => response.data)
  }, {
    enabled: user_id,
  })

  return {...result, profile: result.data }
}

const getWatchlistConfig = (user_id) => ({
  queryKey: ['profile', 'watchlist'],
  queryFn: () => axios.get(`${baseUrl}/${user_id}/watchlist`).then(response => response.data)
})

function useWatchlist() {
  const user_id = useUserId() 
  const result = useQuery(getWatchlistConfig(user_id))
  return {...result, watchlist: result.data }
}

function useRefetchWatchlist () {
  const queryClient = useQueryClient()
  const user_id = useUserId() 
  return useCallback(
    async function refetchWatchlist() {
      queryClient.removeQueries(['profile', 'watchlist'])
      await queryClient.prefetchQuery(getWatchlistConfig(user_id))
    },
    [queryClient, user_id]
  )
}

const useAddWatchlist = () => {
  const queryClient = useQueryClient()
  const user_id = useUserId()
  const authHeader = useAuthHeader()

  return useMutation(
    addItem => axios.post(`${baseUrl}/${user_id}/watchlist`, addItem, authHeader),
    {
      onSuccess: (data, variables) => {
        queryClient.setQueryData(['watchlist'], data)
        queryClient.invalidateQueries(['profile', {user_id}])
      },
      // onSuccess: () => toast.success('Added to watchlist!')
    }
  )
}

function useRemoveWatchlist() {
  const user_id = useUserId()
  const token = useToken()
  const queryClient = useQueryClient()

  return useMutation(
    ({watchlist_id, recommendation_detail_id}) => 
      axios.delete(`${baseUrl}/${user_id}/watchlist/${watchlist_id}`, {
        data: { recommendation_detail_id },
        headers: { Authorization: `bearer ${token}` }
      }),
    {
      onSuccess: (data, variables) => {
        queryClient.removeQueries(['watchlist'], variables.watchlist_id)
        queryClient.invalidateQueries(['profile', {user_id}])
      },
      // onSuccess: () => toast.success('Removed from watchlist!')
    }
  )
}

function useProfileRecommendations (userId) {
  const result = useQuery({
    queryKey: ['profile_recommendations'],
    queryFn: () => axios.get(`${baseUrl}/${userId}/recommendations`)
  })
  console.log(result.data?.data)
  return {...result, recommendations: result.data?.data}
}

function useProfileReviews (userId) {
  const result = useQuery({
    queryKey: ['profile_reviews'],
    queryFn: () => axios.get(`${baseUrl}/${userId}/reviews`)
  })

  return {...result, reviews: result.data?.data}
}


export {
  useProfile,
  useWatchlist,
  useRefetchWatchlist,
  useAddWatchlist,
  useRemoveWatchlist,
  useProfileRecommendations,
  useProfileReviews
}