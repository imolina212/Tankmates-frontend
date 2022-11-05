import { Routes, Route } from "react-router-dom";

import './App.scss';
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart"
import Shop from "./pages/shop/Shop";
import NavBar from "./components/navbar/NavBar.js"
import MyTanks from "./pages/myTanks/MyTanks.js";
import Tank from "./components/tank/Tank"
// import Sidebar from "./components/sideBar/SideBar";
import ProductDetails from "./components/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Sidebar /> */}
      <div className="page-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/tanks" element={<MyTanks />} />
          <Route path="/tanks/:tankId" element={<Tank />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
