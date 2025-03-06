import s from './Body.module.css'
import {arrayOfBooks} from './ArrayOfBooks'
import {Link, useNavigate} from "react-router-dom";
import {useState, createContext, useContext, useEffect} from "react";
import {useCart} from "./DataContext";
import {Basket} from "./Basket";

export const Body = ({pageSize, currentPage, setCurrentPage}) => {

    const [genre, setGenre] = useState('all');
    const { cart, setCart, cost, setCost, addToCart, clearCart } = useCart();
    const [itemCounts, setItemCounts] = useState({})
    const images = arrayOfBooks;

    console.log(cart)

    useEffect(() => {
        const counts = {};
        cart.forEach(item => {
            if(counts[item.id]){
                counts[item.id]++
            } else {
                counts[item.id] = 1;
            }
        });
        setItemCounts(counts);
    }, [cart]);

    const handleCountIncrease = (item) => {
        addToCart(item);
    }

    const handleCountDecrease = (item) => {

        const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart.splice(itemIndex, 1);
            setCart(newCart);


            const itemPrice = parseFloat(item.price) || 0;
            setCost(prevCost => Math.round((prevCost - itemPrice) * 100) / 100);

            setItemCounts(prev => ({
                ...prev,
                [item.id]: (prev[item.id] || 0) - 1
            }));
        }
    }


    const handleGenre = (selectedGenre) => {
        setGenre(selectedGenre);
        setCurrentPage(1);
    };


    const filteredGenre = genre === 'all'
        ? images
        : images.filter(book => book.genre === genre);

    const currentItems = filteredGenre.slice((currentPage - 1) * pageSize, currentPage * pageSize);


    const nextPage = () => {
        if (currentPage * pageSize < filteredGenre.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={s.container}>
            <div className={s.book}>
                <button onClick={() => handleGenre('all')} className={genre === 'all' ? s.active : ''}>Все</button>
                <button onClick={() => handleGenre('classic')} className={genre === 'classic' ? s.active : ''}>Классика</button>
                <button onClick={() => handleGenre('fantasy')} className={genre === 'fantasy' ? s.active : ''}>Фантастика. Фентези</button>
                <button onClick={() => handleGenre('detective')} className={genre === 'detective' ? s.active : ''}>Детектив. Триллер</button>
                <button onClick={() => handleGenre('romance')} className={genre === 'romance' ? s.active : ''}>Любовные романы</button>
                <button onClick={() => handleGenre('adventure')} className={genre === 'adventure' ? s.active : ''}>Приключения</button>
            </div>
            <div className={s.bookShell}>
                {currentItems.length > 0 ? (
                    currentItems.map(e => (
                        <div key={e.id} className={s.alone}>
                            <Link to={`book/${e.id}`}>
                                <img src={e.img} alt="" />
                                <div>{e.name}</div>
                                <div>{e.author}</div>
                                <div>Цена: {e.price} ₽</div>
                            </Link>

                            {itemCounts[e.id] && itemCounts[e.id] > 0 ? (
                                <div>
                                    <button onClick={() => handleCountDecrease(e)}>-</button>
                                    <span>{itemCounts[e.id]}</span>
                                    <button onClick={() => handleCountIncrease(e)}>+</button>
                                </div>
                            ) : (
                                <button onClick={() => {
                                    addToCart(e);
                                }}>В корзину</button>
                            )}
                        </div>
                    ))
                ) : (
                    <div>Нет книг в этом жанре.</div>
                )}
            </div>


            <div className={s.page}>
                <button onClick={prevPage} disabled={currentPage <= 1}>Назад</button>
                <button onClick={nextPage} disabled={currentPage * pageSize >= filteredGenre.length}>Вперед</button>
            </div>
        </div>
    )
}