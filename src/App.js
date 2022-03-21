import { Route, Routes } from "react-router";
import "./App.css";
import MockMan from 'mockman-js'
import ProductsScreen from "./screens/Products";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import WishlistScreen from "./screens/WishlistScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen /> } />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
