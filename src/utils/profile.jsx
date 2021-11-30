import axios from 'axios'
import { useAuth, authHeader } from 'context/auth-context'
import { useMutation, useQuery, useQueryClient } from 'react-query'
const baseUrl = '/api/users'

function useProfile() {
  const { user } = useAuth()
  const tokenHeader = authHeader()

  console.log({user})
  const result = useQuery({
    queryKey: ['profile'],
    queryFn: () => axios.get(`${baseUrl}/${user._id}`, tokenHeader).then(response => response.data)
  })

  return {...result, profile: result.data }
}

function useWatchlist() {
  const { user } = useAuth()
  const result = useQuery({
    queryKey: ['watchlist'],
    queryFn: () => 
      axios.get(`${baseUrl}/${user._id}/watchlist`).then(response => response.data)
  })
  return {...result, watchlist: result.data }
}

function useWatchlistItem (recommendationId) {
  const { watchlist } = useWatchlist()

  return watchlist?.find(w => w.recommendation?._id === recommendationId) ?? null
}

function useAddWatchlist() {
  const tokenHeader = authHeader()
  const queryClient = useQueryClient()
  return useMutation(
    addItem => axios.post(`${baseUrl}/${addItem.user_id}/watchlist`, addItem, tokenHeader),
    {
      onMutate: async newItem => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['watchlist'])
        // Snapshot the previous value
        const previousWatchlist = queryClient.getQueryData(['watchlist'])
        // Optimistically update to the new value
        queryClient.setQueryData(['watchlist'], oldWatchlist => oldWatchlist.concat(newItem))
        return {previousWatchlist}
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, newWatchlistItem, context) => {
        queryClient.setQueryData(['watchlist'], context.previousWatchlist)
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(['watchlist'])
        queryClient.invalidateQueries(['profile'])
      },
      // onSuccess: () => toast.success('Added to watchlist!')
    }
  )
}

function useRemoveWatchlist() {
  const { user } = useAuth()
  const queryClient = useQueryClient()
  return useMutation(
    ({user_id, watchlist_id, recommendation_detail_id}) => 
      axios.delete(`${baseUrl}/${user_id}/watchlist/${watchlist_id}`, {
        headers: { Authorization: `bearer ${user.token}` },
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