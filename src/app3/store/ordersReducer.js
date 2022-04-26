import {ADD_ORDER, DELETE_ORDER} from "./ordersActions";

const initailOrder = {
    orders:[],
}

const ordersReducer = (state = initailOrder, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {...state, orders:[...state.orders, action.payload]}
        case DELETE_ORDER:
            return {...state, orders:state.orders.filter(order => order.id !== action.payload.id)}
        default:
            return state
    }
}
export default ordersReducer;