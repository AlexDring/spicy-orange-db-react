import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import reviewService from '../services/reviews'

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
  const response = await reviewService.getAllReviews()
  return response
})

export const addReview = createAsyncThunk('reviews/addReview', 
  async (newReview) => {
    console.log(newReview)
    const response = await reviewService.addNewReview(newReview)
    console.log(response)
    return response
  })

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReviews.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchReviews.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = [...action.payload]
    },
    [fetchReviews.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

export default reviewsSlice.reducer

export const selectAllReviews = (state) => state.reviews.data
