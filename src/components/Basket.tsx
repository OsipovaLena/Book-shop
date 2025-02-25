import s from './Basket.module.css'
import { useNavigate } from "react-router-dom";
import {createContext, useState} from "react";
import {CartProvider, useCart} from "./DataContext";

export const Basket = () => {

    const { cart, cost, clearCart, setCart, setCost } = useCart();
    const navigate = useNavigate();
    const [debug, setDebug] = useState(false);


    const handleDebug = (itemToRemove, index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        const itemPrice = parseFloat(itemToRemove.price) || 0;
        setCost(prevCost => Math.round((prevCost - itemPrice) * 100) / 100);
    }


    return (

            <div className={s.cartContainer}>
                <h2>Корзина</h2>
                <div className={s.cartItems}>
                    {cart.map((item, index) => (
                        <div key={index} className={s.cartItem}>
                            <div className={s.delete}>
                            <button onClick={() => handleDebug(item)}>x</button>
                            </div>
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