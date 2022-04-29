import {createSlice} from '@reduxjs/toolkit'

export const operationSlice = createSlice({
    name: 'operation',
    initialState: {value: ""},
    reducers: {
        sumOperation: (state, action) => {
            state.value = "+"
        },
        differenceOperation: (state, action) => {
            state.value = "-"
        },
        divisionOperation: (state, action) => {
            state.value = "/"
        },
        multiplyOperation: (state, action) => {
            state.value = "*"
        }
    },
})


export const {sumOperation, differenceOperation, divisionOperation, multiplyOperation} = operationSlice.actions

export default operationSlice.reducer