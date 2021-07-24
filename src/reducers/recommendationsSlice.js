/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
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
  return response
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
      state.data = action.payload
    },
    [fetchRecommendations.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchSingleRecommendation.pending]: (state) => {
      state.individualStatus = 'loading'
    },
    [fetchSingleRecommendation.fulfilled]: (state, { payload }) => {
      const index = state.data.findIndex(rec => rec._id === payload._id)
      if(index !== -1) {
        state.data[index].mediaDetail = payload.mediaDetail
      }
    },
    [fetchSingleRecommendation.rejected]: (state, action) => {
      state.error = action.error.message
    },
    [addNewRecommendation.fulfilled]: (state, action) => {
      state.data.push(action.payload)
    }
  }
})

// export const { fetchSingleRecommendation } = recommendationsSlice.actions

export default recommendationsSlice.reducer

export const selectAllRecommendations = (state) => state.recommendations.data // Info on this -> https://redux.js.org/tutorials/essentials/part-5-async-logic#extracting-posts-selectors