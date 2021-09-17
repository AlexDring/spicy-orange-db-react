import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import profileRouter from '../services/profile'

const initialState = {
  data: null,
  status: 'idle',
  error: null
}

export const fetchProfile = createAsyncThunk('/profile/fetchProfile', async (profileId) => {
  const response = await profileRouter.getProfile(profileId)
  return response
})

export const fetchWatchlist = createAsyncThunk('/profile/fetchWatchlist', async (profileId) => {
  const response = await profileRouter.getWatchlist(profileId)
  return response
})

export const addToWatchlist = createAsyncThunk('/profile/addToWatchlist', async (item) => {
  const response = await profileRouter.saveToWatchlist(item)
  return response
})

export const removeFromWatchlist = createAsyncThunk('/profile/removeFromWatchlist', async (item) => {
  await profileRouter.removeFromWatchlist(item)
  return item.watchlistId
})


const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfile.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.status = 'suceeded'
      state.data = action.payload
    },
    [fetchProfile.failed]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchWatchlist.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchWatchlist.fulfilled]: (state, action) => {
      state.status = 'suceeded'
      state.data = action.payload
    },
    [fetchWatchlist.failed]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [addToWatchlist.pending]: (state) => {
      state.status = 'loading'
    },
    [addToWatchlist.fulfilled]: (state, action) => {
      state.status = 'suceeded'
      state.data = action.payload
    },
    [addToWatchlist.failed]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [removeFromWatchlist.pending]: (state) => {
      state.status = 'loading'
    },
    [removeFromWatchlist.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data.watchlist.splice(action.payload)
    },
    [removeFromWatchlist.failed]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

export default profileSlice.reducer