import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./slices/productSlice";
function App() {
  const products = useSelector((state) => state.product.productItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
