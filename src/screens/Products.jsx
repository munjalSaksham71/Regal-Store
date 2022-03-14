import Navbar from "../components/Nav/Navbar";
import { useProduct } from "../context/product-context";
import ProductListing from "../components/ProductListing/ProductListing";
import Filters from "../components/Filters/Filters";

const ProductsScreen = () => {
  const { state } = useProduct()
  return (
    <>
      <Navbar />
      {state.loading && <div>Loading...</div>}
      <Filters />
      {( !state.loading && !state.error ) && <ProductListing products={state.products.products} />}
      {state.error && <div>{state.error}</div>}
    </>
  );
};

export default ProductsScreen;