import s from './Basket.module.css'
import { useNavigate } from "react-router-dom";
import {createContext, useState} from "react";
import {CartProvider, useCart} from "./DataContext";

export const Basket = () => {

    const { cart, cost, clearCart } = useCart();
    const navigate = useNavigate();
    const [debug, setDebug] = useState(false);


    const handleDebug = () => {
        setDebug(!debug)
    }

    return (

            <div className={s.cartContainer}>
                <h2>Корзина</h2>
                <div className={s.cartItems}>
                    {cart.map((item, index) => (
                        <div key={index} className={s.cartItem}>
                            <div className={s.itemInfo}>
                                <img src={item.img} alt={item.name} className={s.bookImage} />
                                <div className={s.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p>{item.price} ₽</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={s.cartSummary}>
                    <div className={s.totalCost}>
                        <h3>Итого:</h3>
                        <p>{cost} ₽</p>
                    </div>
                    <button
                        onClick={clearCart}
                        className={s.clearButton}
                    >
                        Очистить корзину
                    </button>
                    <button className={s.orderButton}>
                        Оформить заказ
                    </button>
                </div>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>


    )
}