import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import Products from "./components/Products";
import './app.css';
import Orders from "./components/Orders";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}