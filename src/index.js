import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {App as App1} from './app1/App'
import {App as App2} from './app2/App';
import {App as App3} from './app3/app'
import {App as App4} from './app4/App';
import {store as store2} from "./app2/store";
import {store as store1} from "./app1/store";
import {store as store3} from "./app3/store/appStore";
import {store as store4} from './app4/store/index'

import {store} from './shop/store/index'
import {App as ShopApp} from './shop/App'
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <ShopApp />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
