import Navbar from "../components/Nav/Navbar";
import { useProduct } from "../context/product-context";
import ProductListing from "../components/ProductListing/ProductListing";
import Filters from "../components/Filters/Filters";
import { useFilters } from "../context/filter-context";

const ProductsScreen = () => {
  const {
    state: { products, loading, error },
  } = useProduct();
  const {
    productListState: { sortBy, byStock, byFastDelivery, byRating, byCategory },
  } = useFilters();

  const filterProducts = () => {
    let filteredProducts = products;

    if (sortBy) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sortBy === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating > 0) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if (byCategory.length) {
      filteredProducts = filteredProducts.filter((prod) => {
        return byCategory.includes(prod.categoryName);
      });
    } else {
      filteredProducts = filteredProducts;
    }
    return filteredProducts;
  };

  const filteredProductList = filterProducts();

  return (
    <>
      <Navbar />
      {loading && <div>Loading...</div>}
      <Filters />
      {!loading && !error && <ProductListing products={filteredProductList} />}
      {error && <div>{error}</div>}
    </>
  );
};

export default ProductsScreen;
