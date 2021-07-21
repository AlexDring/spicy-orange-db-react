import { createSlice } from '@reduxjs/toolkit'

const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState: {
    user: null
  },
  reducers: {
    loggedIn: (state, action) => {
      return {
        ...state,
        user: action.payload
      }
    },
    loggedOut: (state) => {
      return {
        ...state,
        user: null
      }
    }
  }
})

export const { loggedIn } = loggedInUserSlice.actions

export default loggedInUserSlice.reducer