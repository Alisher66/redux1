
import notesReducer from './notesReducer';
import {createStore} from 'redux';

import {composeWithDevTools} from "redux-devtools-extension"



export const store = createStore(notesReducer, composeWithDevTools())

