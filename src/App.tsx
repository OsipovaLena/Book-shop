import './App.css'
import {useState} from "react";
import * as React from "react";
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {useNavigate} from "react-router-dom";
import s from './App.css'
import {CartProvider} from "./components/DataContext";
import {DownPage} from "./components/DownPage";


const App = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const pageSize = 3;
    const navigate = useNavigate()

    const addToCart = (book) => {
        setCartItems([...cartItems, book]);
    };

    return (

        <div className="container">
            <Header/>
            <Body
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                addToCart={addToCart}
            />
            <DownPage />
        </div>

    )
}

export default App
