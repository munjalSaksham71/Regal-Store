import { Route, Routes } from "react-router";
import "./App.css";
import MockMan from 'mockman-js'
import ProductsScreen from "./screens/Products";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen /> } />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
