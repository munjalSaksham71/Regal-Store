import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

const initialState = {
  loading: true,
  products: [],
  error: "",
};

const getProducts = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "ERROR":
      return { ...state, loading: false, error: "Something went wrong" };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(getProducts, initialState);

  useEffect(() => {
      (async () => {
        try {
            const { data } = await axios.get("/api/products");
            dispatch({ type: "SUCCESS", payload: data.products });
          } catch (error) {
            dispatch({ type: "ERROR" });
          }
      })()
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export { useProduct, ProductProvider };
