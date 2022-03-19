import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const useFilters = () => useContext(FilterContext);

const FilterProvider  = ({children}) => {
    
    const initialState = {
        sortBy: '',
        byStock: false, 
        byFastDelivery: false, 
        byRating: 0,
        byCategory: []
    }

    const filterReducer = ( products, action ) => {
        switch (action.type) {
            case 'SORT':
                return {...products, sortBy: action.payload};
            case 'FILTER_BY_STOCK':
                return {...products, byStock: !products.byStock}; 
            case 'FILTER_BY_DELIVERY':
                return {...products, byFastDelivery: !products.byFastDelivery}; 
            case 'FILTER_BY_RATING':
                return {...products, byRating: action.payload} 
            case 'FILTER_BY_CATEGORY':
                return {...products, byCategory: [...products.byCategory, action.payload]}   
            case 'CLEAR_FILTERS':
                return {
                    sortBy: '',
                    byStock: false, 
                    byFastDelivery: false, 
                    byRating: 0,
                    byCategory: '' 
                } 
            default:
                return {...products};
        }
    }

    const [productListState, productListDispatch] = useReducer(filterReducer, initialState);
    
    return <FilterContext.Provider value={{productListState, productListDispatch}}>{children}</FilterContext.Provider>
}
export {useFilters, FilterProvider }