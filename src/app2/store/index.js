
import tasksReducer from './tasksReducer';
import {createStore} from 'redux';

import {composeWithDevTools} from "redux-devtools-extension"



export const store = createStore(tasksReducer, composeWithDevTools())

