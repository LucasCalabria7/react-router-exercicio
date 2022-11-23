import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import ErrorPage from '../pages/ErrorPage'
import ProductsPage from '../pages/ProductsPage'
import { Header } from "../components/Header";

export function RouteEx () {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={< HomePage />}/>
            <Route path="/profile" element={< ProfilePage />}/>
            <Route path="/products/:name" element={< ProductsPage />}/>
            <Route path="*" element={< ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}