import { configureStore } from '@reduxjs/toolkit'
import recommendationsReducer from './reducers/recommendationsSlice'

export default configureStore({
  reducer: {
    recommendations: recommendationsReducer,
  }
})