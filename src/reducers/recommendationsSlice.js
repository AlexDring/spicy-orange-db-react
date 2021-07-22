import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import recommendationsRouter from '../services/recommendations'

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const fetchRecommendations = createAsyncThunk('recommendations/fetchRecommendations', async () => {
  const response = await recommendationsRouter.getAll()
  return response.slice().reverse() // reverse array so most erecently added is displayed first.  
})

export const fetchSingleRecommendation = createAsyncThunk('recommendations/fetchSingleRecommendation', async (id) => {
  const response = await recommendationsRouter.getRecommendation(id)
  return response // reverse array so most erecently added is displayed first.  
})

export const addNewRecommendation = createAsyncThunk('recommendations/addNewRecommendation', async (initialRec) => {
  const response = await recommendationsRouter.addRecommendation(initialRec)
  return response
})

const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRecommendations.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchRecommendations.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = [...action.payload]
    },
    [fetchRecommendations.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchSingleRecommendation.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchSingleRecommendation.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = [...action.payload]
    },
    [fetchSingleRecommendation.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [addNewRecommendation.fulfilled]: (state, action) => {
      state.data.push(action.payload)
    }
  }
})

export default recommendationsSlice.reducer

export const selectAllRecommendations = (state) => state.recommendations.data // Info on this -> https://redux.js.org/tutorials/essentials/part-5-async-logic#extracting-posts-selectors