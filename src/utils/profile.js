import axios from 'axios'
import {useMutation, useQuery, useQueryClient} from 'react-query'
import storage from './storage'
const baseUrl = '/api/profile/'

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${storage.getToken()}` }
  }
}

function useProfile({profile_id}) {
  const result = useQuery({
    queryKey: ['profile', profile_id],
    queryFn: () => 
      axios.get(`${baseUrl}/${profile_id}/watchlist`).then(response => response.data)
  })
  return {...result, profile: result.data }
}

function useAddWatchlist() {
  const queryClient = useQueryClient()
  return useMutation(
    addItem => 
      axios.post(`${baseUrl}/${addItem.profile_id}/watchlist`, addItem, getConfig()),
    {onSettled: () => queryClient.invalidateQueries('profile')}
  )
}

function useRemoveWatchlist() {
  const queryClient = useQueryClient()
  return useMutation(
    removeItem => 
      axios.delete(`${baseUrl}/${removeItem.profile_id}/watchlist/${removeItem.watchlist_id}`, getConfig()),
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