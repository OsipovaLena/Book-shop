import { createContext, useContext, useState, useEffect } from 'react';

const initialState = {
    cart: [],
    cost: 0,
    addToCart: () => {},
    clearCart: () => {}
};

const CartContext = createContext(initialState);

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });


    const [cost, setCost] = useState(() => {
        const savedCost = localStorage.getItem('cost');
        return savedCost ? JSON.parse(savedCost) : 0;
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cost', JSON.stringify(cost));
    }, [cart, cost]);


    const addToCart = (item) => {
        setCart([...cart, {
            name: item.name,
            price: item.price,
            img: item.img,
            author: item.author,
            id: item.id
        }]);
        setCost(prevCost => prevCost + +item.price);
    };


    const clearCart = () => {
        setCart([]);
        setCost(0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            cost,
            addToCart,
            clearCart,
            setCart,
            setCost
        } as any}>
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
    return useContext(CartContext);
}