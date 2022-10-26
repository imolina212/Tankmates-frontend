import { Routes, Route } from "react-router-dom";

import './App.scss';
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart"
import Shop from "./pages/shop/Shop";
import NavBar from "./components/navbar/NavBar.js"
// import Sidebar from "./components/sideBar/SideBar";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Sidebar /> */}
      <div className="page-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
