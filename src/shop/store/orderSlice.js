import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: []
  }
const orderSlise = createSlice({
    name:'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload)
        },
        changeOrder: (state, action) => {
            state.orders.forEach(order => {
                if(order.product_id === action.payload.product_id) {
                    order.count = action.payload.count
                    order.total_price = action.payload.price
                }
            })
        },
        deleteOreder: (state, action) => {
            state.orders = state.orders.filter(order => order.product_id !== action.payload)
        }
    }
})

export const {addOrder, changeOrder, deleteOreder} = orderSlise.actions;
export default orderSlise.reducer;