import {Provider} from 'react-redux'
import {store} from './store/index'
import Calculator from "./comonents/Сalculator";

export function App() {
    return (
        <Provider store={store}>
            <Calculator/>
        </Provider>
    )
}
