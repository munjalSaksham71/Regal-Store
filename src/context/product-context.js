import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const Product = createContext();

const useProduct = () => useContext(Product);

const initialState = {
    loading: true, 
    products: [],
    error: ''
}

const getProducts = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {...state, products: action.payload, loading: false, error: ''};
        case 'ERROR':
            return {...state, products: [], loading: false, error: "Something went wrong"};
        default:
           return state;
    }
}

const ProductProvider = ({children}) => {
    useEffect(() => {  
        axios.get('/api/products')  
            .then(response => {  
                dispatch({ type: 'SUCCESS', payload: response.data })  
            })  
            .catch(error => {  
                dispatch({ type: 'ERROR'})  
            })  
    }, [])

    const [state, dispatch] = useReducer(getProducts, initialState)

    return <Product.Provider value={{state, dispatch}}>{children}</Product.Provider>
}
export {useProduct, ProductProvider}