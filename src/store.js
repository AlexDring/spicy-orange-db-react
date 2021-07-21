import { configureStore } from '@reduxjs/toolkit'
import recommendationsReducer from './reducers/recommendationsSlice'
import loggedInUserReducer from './reducers/loggedInUserSlice'

export default configureStore({
  reducer: {
    recommendations: recommendationsReducer,
    loggedInUser: loggedInUserReducer
  }
})