import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>}>

                </Route>
            </Routes>
        </BrowserRouter>

    )
}