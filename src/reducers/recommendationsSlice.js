import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import recommendationsRouter from '../services/recommendations'

const initialState = {
  recommendations: [],
  status: 'idle',
  error: null
}

export const fetchRecommendations = createAsyncThunk('recommendations/fetchRecommendations', async () => {
  const response = await recommendationsRouter.getAll()
  return response
})

export const addNewRecommendation = createAsyncThunk('recommendations/addNewRecommendation', async (initialRec) => {
  console.log('here')
  const response = await recommendationsRouter.addRecommendation(initialRec)
  console.log(response)
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
      state.recommendations = state.recommendations.concat(action.payload)
    },
    [fetchRecommendations.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [addNewRecommendation.fulfilled]: (state, action) => {
      state.recommendations.push(action.payload)
    }
  }
})

export default recommendationsSlice.reducer

export const selectAllRecommendations = (state) => state.recommendations.recommendations // Info on this -> https://redux.js.org/tutorials/essentials/part-5-async-logic#extracting-posts-selectors