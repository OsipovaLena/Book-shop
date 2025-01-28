import { useParams } from 'react-router-dom';
import {arrayOfBooks} from "./ArrayOfBooks";


export const InsideBook = () => {

    const { id } = useParams();


    const book = arrayOfBooks.find(book => book.id === parseInt(id));


    if (!book) {
        return <div>Книга не найдена</div>;
    }


    return (
        <div>
            <img src={book.img} alt={book.name} />
            <h1>{book.name}</h1>
            <h2>{book.author}</h2>
            <p>Жанр: {book.genre}</p>
            <p>Цена: {book.price}</p>
            <p>{book.description}</p>
        </div>
    );
};

