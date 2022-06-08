import { AuthContextProvider } from "./auth-context";
import { CartContextProvider } from "./cart-context";
import { FilterProvider } from "./filter-context";
import { ProductProvider } from "./product-context";
import { WishlistContextProvider } from "./wishlist-context";

const CombineContext = ({ children }) => {
  return (
    <div>
      <AuthContextProvider>
        <ProductProvider>
          <FilterProvider>
            <CartContextProvider>
              <WishlistContextProvider>
                {children}
              </WishlistContextProvider>
            </CartContextProvider>
          </FilterProvider>
        </ProductProvider>
      </AuthContextProvider>
    </div>
  );
};

export default CombineContext;
