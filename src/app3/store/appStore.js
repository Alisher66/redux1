import {composeWithDevTools} from "redux-devtools-extension"
import {createStore, combineReducers} from "redux";
import productsReducer from "./productsReducer";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    orders: ordersReducer
})

export const store = createStore(rootReducer, composeWithDevTools());