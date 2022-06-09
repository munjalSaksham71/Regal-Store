import { Route, Routes } from "react-router";
import "./App.css";
import MockMan from 'mockman-js'
import { HomeScreen, ProductsScreen, CartScreen, WishlistScreen, LoginScreen, SignupScreen,ProductDescription, NotFound  } from './screens/index'
import Navbar from "./components/Nav/Navbar";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen /> } />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/products/:productId" element={<ProductDescription />} />
        <Route path="/cart" element={<PrivateRoute><CartScreen /></PrivateRoute>} />
        <Route path="/wishlist" element={<PrivateRoute><WishlistScreen /></PrivateRoute>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
