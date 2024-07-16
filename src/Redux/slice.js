import { createSlice } from "@reduxjs/toolkit"
import employees from "../Datas/mocked_employees.js"

export const employeeSlice = createSlice({
    name: "employees",
    initialState : employees,
    reducers : {
        createEmployee : (state, action) => {
         const newEmployee = action.payload
         state.push(newEmployee)
        }
    }
})
export const {createEmployee} = employeeSlice.actions
export default employeeSlice.reducer