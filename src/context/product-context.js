import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const initialState = {
    loading: true, 
    products: [],
    error: ''
}

const getProducts = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'ERROR':
            return {...state, loading: false, error: "Something went wrong"};
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

    return <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>
}
export {useProduct, ProductProvider}