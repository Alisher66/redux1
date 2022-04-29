import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculatorSlice'
import operationReducer from './operationSlice'

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
        operation: operationReducer,
    },
})