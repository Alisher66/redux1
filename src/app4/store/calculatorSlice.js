import {createSlice} from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {value: ""},
    reducers: {
        sum: (state, action) => {
            state.value = action.payload.first + action.payload.second;
        },
        difference: (state, action) => {
            state.value = action.payload.first - action.payload.second
        },
        division: (state, action) => {
            state.value = action.payload.first / action.payload.second
        },
        multiply: (state, action) => {
            state.value = action.payload.first * action.payload.second
        }
    },
})


export const {sum, difference, division, multiply} = calculatorSlice.actions

export default calculatorSlice.reducer