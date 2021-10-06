import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getConfig } from './misc'
const baseUrl = '/api/profile/'

function useProfile({profile_id}) {
  const result = useQuery({
    queryKey: 'profile',
    queryFn: () => 
      axios.get(`${baseUrl}/${profile_id}/watchlist`).then(response => response.data)
  })
  return {...result, profile: result.data }
}

function useAddWatchlist(user) {
  const queryClient = useQueryClient()
  return useMutation(
    addItem => axios.post(`${baseUrl}/${addItem.profile_id}/watchlist`, addItem, getConfig(user.token)),
    {
      onMutate: async newItem => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries('profile')
        // Snapshot the previous value
        const previousProfile = queryClient.getQueryData('profile')
        // Optimistically update to the new value
        queryClient.setQueryData('profile', oldProfile => ({
          ...oldProfile,
          watchlist: [...oldProfile.watchlist, newItem]
        }))
        return {previousProfile}
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, newTodo, context) => {
        queryClient.setQueryData('profile', context.previousProfile)
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries('profile')
      },
    }
  )
}

function useRemoveWatchlist(user) {
  const queryClient = useQueryClient()
  return useMutation(
    ({profile_id, watchlist_id}) => axios.delete(`${baseUrl}/${profile_id}/watchlist/${watchlist_id}`, getConfig(user.token)),
    {
      onMutate: async removeItem => {
        await queryClient.cancelQueries('profile')
        const previousProfile = queryClient.getQueryData('profile')
        queryClient.setQueryData('profile', oldProfile => ({
          ...oldProfile,
          watchlist: oldProfile.watchlist.filter(r => r._id !== removeItem.watchlist_id)
        }))

        return {previousProfile}
      },
      onError: (err, newTodo, context) => {
        queryClient.setQueryData('profile', context.previousProfile)
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries('profile')
      },
    }
  )
}

function useWatchlistItem (user, mediaId) {
  const {profile} = useProfile(user)
  return profile?.watchlist.find(w => w.media_id === mediaId) ?? null
}


export {
  useProfile,
  useAddWatchlist,
  useRemoveWatchlist,
  useWatchlistItem
}