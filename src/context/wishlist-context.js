import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const wishlistReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return { ...state, wishlist: action.payload };
      case "REMOVE_FROM_WISHLIST":
        return { ...state, wishlist: action.payload };
      default:
        return state;
    }
  };

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistContextProvider, useWishlist };
