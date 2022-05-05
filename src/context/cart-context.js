import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                return {...state, cart: action.payload};
            case "REMOVE_FROM_CART":
                return {...state, cart: action.payload};
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