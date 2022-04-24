import { customersReducer } from "./customersReduser";
import { countReduser } from "./countReducer";
import {createStore, combineReducers} from 'redux';

import {composeWithDevTools} from "redux-devtools-extension"


const rootReducser = combineReducers({
    count: countReduser,
    customers: customersReducer
})

export const store = createStore(rootReducser, composeWithDevTools())