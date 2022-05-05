import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './orderSlice';
import productSlice from './productSlice';
import {composeWithDevTools} from "redux-devtools-extension"
export const store = configureStore({
  reducer: {
      order: orderSlice,
      product: productSlice
  },
})