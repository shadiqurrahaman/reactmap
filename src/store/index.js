import { createSlice,configureStore } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'token',
  initialState: {
    token: ""
  },
  reducers: {
    storeToken:(state, action) => {
      state.token = action.payload
      localStorage.setItem('token',action.payload)
    },
    removeToken:(state) => {
      state.token = ""
      localStorage.removeItem('token')
    }
  }
})

const store = configureStore({
  reducer:authSlice.reducer
})
export default store;
export const { storeToken, removeToken } = authSlice.actions;