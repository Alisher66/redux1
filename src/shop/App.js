import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import Products from "./components/Products";
import './app.css';
import Orders from "./components/Orders";
import { useEffect } from "react";
import { useDispatch} from 'react-redux'
import { getProducts } from './store/productSlice';
import Register from "./components/Register";
import Login from "./components/Login";

export function App() {
    // const dispatch = useDispatch();

    // useEffect(() =>{
    //     dispatch(getProducts())
    // },[dispatch])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}