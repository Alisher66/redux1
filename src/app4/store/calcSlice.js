import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice({
    name: 'calc',
    initialState: { value:0},
    reducers: {
        sum: (state, action) => {
            state.value = state.value + action.payload
        },
    },
})


export const { sum } = calcSlice.actions

export default calcSlice.reducer