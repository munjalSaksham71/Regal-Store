import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                return {...state, cart: action.payload};
            case "REMOVE_FROM_CART":
                return {...state, cart: action.payload};
            case "INCREMENT_QUANTITY": 
                return {...state, cart: state.cart.map((item) => item._id === action.payload ? {...item, qty: item.qty + 1}: item)}
                case "DECREMENT_QUANTITY": 
                return {...state, cart: state.cart.map((item) => item._id === action.payload ? {...item, qty: item.qty - 1}: item)}
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