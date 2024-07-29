import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from "../Redux/slice.js"

const store = configureStore({
  reducer: {
      employee: employeeReducer
  }
})

export default store