import Navbar from "components/navbar/Navbar";
import Products from "components/products/Products";
import { Routes, Route } from "react-router";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products/>}>
        </Route>
      </Routes>
    </>
  );
}
export default App;
