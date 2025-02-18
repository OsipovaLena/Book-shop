import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Basket} from "./components/Basket"
import App from "./App";
import {InsideBook} from "./components/AboutBook";
import {CartProvider} from "./components/DataContext";

export const AppRouter = () => {

    return (
        <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/basket" element={<Basket />}/>
                <Route path="/book/:id" element={<InsideBook />}/>
            </Routes>
        </BrowserRouter>
            </CartProvider>
    )
}