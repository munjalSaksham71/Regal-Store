import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                return {...state, cart: [...state.cart, {...action.payload, qty:1}]};
            case "REMOVE_FROM_CART":
                return {...state, cart: state.cart.filter((c) => c._id !== action.payload._id)}
            default:
                return state;
        }
    }
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: [],
    })

    return <CartContext.Provider value={{cartState, cartDispatch}}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export {CartContextProvider, useCart};