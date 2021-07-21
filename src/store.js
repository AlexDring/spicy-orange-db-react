import { configureStore } from '@reduxjs/toolkit'
import recommendationsReducer from './reducers/recommendationsSlice'
import loggedInUserReducer from './reducers/loggedInUserSlice'
import reviewsReducer from './reducers/reviewSlice'

export default configureStore({
  reducer: {
    recommendations: recommendationsReducer,
    reviews: reviewsReducer,
    loggedInUser: loggedInUserReducer
  }
})