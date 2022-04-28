import {ADD_ORDER, DELETE_ORDER, CHANGE_ORDER} from "./ordersActions";

const initailOrder = {
    orders: [],
}

const ordersReducer = (state = initailOrder, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {...state, orders: [...state.orders, action.payload]}
        case DELETE_ORDER:
            return {...state, orders: state.orders.filter(order => order.product_id !== action.payload.product_id)}
        case CHANGE_ORDER:
            return {
                ...state,
                orders: state.orders.map(order => (order.product_id === action.payload.product_id) ? action.payload : order)
            }
        default:
            return state
    }
}
export default ordersReducer;