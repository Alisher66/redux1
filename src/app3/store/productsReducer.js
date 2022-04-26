import {ADD_PRODUCT, DELETE_PRODUCT} from "./productsActons";

const initialProducts = {
    products:[],
}

const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case ADD_PRODUCT :
            return {...state, products:[...state.products, action.payload]}
        case DELETE_PRODUCT :
            return  {...state, products: state.products.filter(product => product.id !== action.payload.id)}
        default:
            return state
    }
}
export  default  productsReducer;