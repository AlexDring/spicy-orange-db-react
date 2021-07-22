import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import omdbService from '../services/omdb'

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const fetchOMDbSearch = createAsyncThunk('omdbSearch/fetchSearch', async (query) => {
  const response = await omdbService.searchOMDb(`s=${query}`)
  console.log(response.Search)
  return response.Search
})

const omdbSearchSlice = createSlice({
  name: 'omdbSearch',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOMDbSearch.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchOMDbSearch.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = [...action.payload]
    },
    [fetchOMDbSearch.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

export default omdbSearchSlice.reducer