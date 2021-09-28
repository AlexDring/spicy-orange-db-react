import axios from 'axios'
import {useMutation, useQuery, useQueryClient} from 'react-query'
const baseUrl = '/api/profile/'

import profileRouter from '../services/profile'

function useProfile({profile_id}) {
  const result = useQuery({
    queryKey: ['profile', profile_id],
    // queryFn: () => profileRouter.getProfile(user.profile_id)
    queryFn: () => 
      axios.get(`${baseUrl}/${profile_id}/watchlist`)
        .then(response => response.data)
  })
  console.log(result)
  return {...result, profile: result.data }
}

function useAddWatchlist() {
  const queryClient = useQueryClient()
  return useMutation(
    updates => profileRouter.saveToWatchlist(updates),
    {onSettled: () => queryClient.invalidateQueries('profile')}
  )
}

function useRemoveWatchlist() {
  const queryClient = useQueryClient()
  return useMutation(
    updates => profileRouter.removeFromWatchlist(updates),
    {onSettled: () => queryClient.invalidateQueries('profile')}
  )
}

function useWatchlistItem (user, mediaId) {
  const {profile} = useProfile(user)
  const item = profile?.watchlist.find(w => w.media_id?._id === mediaId)
  return item
}


export {
  useProfile,
  useAddWatchlist,
  useRemoveWatchlist,
  useWatchlistItem
}