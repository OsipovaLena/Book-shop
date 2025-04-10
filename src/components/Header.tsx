import {useNavigate} from "react-router-dom";
import s from './Header.module.css'
import bookImage from './book.png'
import {useCart} from "./DataContext";


export const Header = () => {

    const { cart, cost } = useCart();
    const navigate = useNavigate();

    const handleBasketClick = () => {
        navigate('/basket')
    }

    return (
        <div className={s.head}>
            <div className={s.leftPosition}>
                <img src={bookImage} alt=""/>
                <div className={s.name}>
                    <h1>Книжный каталог</h1>
                    <p>Читай, умней, отдыхай, развивайся</p>
                </div>
            </div>
            <button onClick={handleBasketClick}>Корзина
                <div>{cart.length}:</div>
                <div>{cost} ₽</div>
            </button>

        </div>
    )
}
