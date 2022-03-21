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

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <FilterProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <App />
            </WishlistContextProvider>
          </CartContextProvider>
        </FilterProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
