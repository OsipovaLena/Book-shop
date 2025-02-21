import {useNavigate, useParams} from 'react-router-dom';
import {arrayOfBooks} from "./ArrayOfBooks";
import s from './AboutBook.module.css'


export const InsideBook = () => {

    const { id } = useParams();
    const navigate = useNavigate()

    const book = arrayOfBooks.find(book => book.id === parseInt(id));


    if (!book) {
        return <div>Книга не найдена</div>;
    }


    return (
        <div className={s.aboutBook}>
            <img src={book.img} alt={book.name} />
            <h1>{book.name}</h1>
            <h2>{book.author}</h2>
            <p>Цена: {book.price} ₽</p>
            <p>{book.description}</p>
            <div className={s.btnBack}>
            <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        </div>
    );
};

