import { Route, Routes } from "react-router";
import "./App.css";
import MockMan from 'mockman-js'
import { HomeScreen, ProductsScreen, CartScreen, WishlistScreen, LoginScreen, SignupScreen  } from './screens/index'
import Navbar from "./components/Nav/Navbar";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen /> } />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
