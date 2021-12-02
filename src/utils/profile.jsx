import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { useAuth, authHeader } from 'context/auth-context'
import { useMutation, useQuery, useQueryClient } from 'react-query'
const baseUrl = '/api/users'

function useProfile() {
  const { user } = useAuth0()
  const user_id = user && user['https://spicy-orange.co.uk/db_id']

  const result = useQuery({
    queryKey: ['profile', { user_id }],
    queryFn: () => user_id && axios.get(`${baseUrl}/${user_id}`).then(response => response.data)
  })

  console.log(result.data)

  return {...result, profile: result.data }
}

function useWatchlist() {
  const { user } = useAuth0()
  // const user_id = user?.sub
  const user_id = user && user['https://spicy-orange.co.uk/db_id']

  const result = useQuery({
    queryKey: ['profile', 'watchlist', { user_id }],
    queryFn: () => 
      axios.get(`${baseUrl}/${user_id}/watchlist`).then(response => response.data)
  })
  return {...result, watchlist: result.data }
}

function useWatchlistItem (recommendationId) {
  const { watchlist } = useWatchlist()

  return watchlist?.find(w => w.recommendation?._id === recommendationId) ?? null
}

function useAddWatchlist() {
  // const tokenHeader = authHeader()
  const queryClient = useQueryClient()
  const { user } = useAuth0()
  const user_id = user?.sub

  return useMutation(
    addItem => axios.post(`${baseUrl}/${user_id}/watchlist`, addItem),
    {
      onSettled: () => {
        queryClient.invalidateQueries(['watchlist'])
        queryClient.invalidateQueries(['profile'])
      },
      // onSuccess: () => toast.success('Added to watchlist!')
    }
  )
}

function useRemoveWatchlist() {
  // const { user } = useAuth()
  const { user } = useAuth0()
  const user_id = user?.sub
  const queryClient = useQueryClient()
  return useMutation(
    ({watchlist_id, recommendation_detail_id}) => 
      axios.delete(`${baseUrl}/${user_id}/watchlist/${watchlist_id}`, {
        // headers: { Authorization: `bearer ${user.token}` },
        data: { recommendation_detail_id }
      }),
    {
      onMutate: async removeItem => {
        await queryClient.cancelQueries(['watchlist'])
        const previousWatchlist = queryClient.getQueryData(['watchlist'])
        queryClient.setQueryData(['watchlist'], oldWatchlist => oldWatchlist.filter(r => r._id !== removeItem.watchlist_id))

        return {previousWatchlist}
      },
      onError: (err, newWatchlistItem, context) => {
        queryClient.setQueryData(['watchlist'], context.previousWatchlist)
        console.log(err)
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(['watchlist'])
        queryClient.invalidateQueries(['profile'])
      },
      // onSuccess: () => toast.success('Removed from watchlist!')
    }
  )
}

function useProfileRecommendations (userId) {
  console.log(userId)
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
  console.log({result})
  return {...result, reviews: result.data?.data}
}


export {
  useProfile,
  useWatchlist,
  useWatchlistItem,
  useAddWatchlist,
  useRemoveWatchlist,
  useProfileRecommendations,
  useProfileReviews
}