import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Basket} from "./components/Basket"
import App from "./App";
import {InsideBook} from "./components/AboutBook";

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/basket" element={<Basket />}/>
                <Route path="/book/:id" element={<InsideBook />}/>
                <Route path="/cart" element={<Basket />} />


            </Routes>
        </BrowserRouter>
    )
}