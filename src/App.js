import Navbar from "components/navbar/Navbar";
import Products from "components/products/Products";
import Cart from "components/cart/Cart";
import { Routes, Route } from "react-router";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}
export default App;
