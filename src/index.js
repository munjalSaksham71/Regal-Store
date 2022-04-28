import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/product-context";
import { FilterProvider } from "./context/filter-context";
import { CartContextProvider } from "./context/cart-context";
import { WishlistContextProvider } from "./context/wishlist-context";
import { AuthContextProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductProvider>
          <FilterProvider>
            <CartContextProvider>
              <WishlistContextProvider>
                <App />
              </WishlistContextProvider>
            </CartContextProvider>
          </FilterProvider>
        </ProductProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
