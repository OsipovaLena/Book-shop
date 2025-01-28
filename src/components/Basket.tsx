import { useNavigate } from "react-router-dom";


export const Basket = ({ cartItems }) => {

    const navigate = useNavigate();


    return (
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    )
}