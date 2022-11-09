import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import NavBar from "./components/navbar/NavBar.js";
import MyTanks from "./pages/myTanks/MyTanks.js";
import ProductDetails from "./components/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";
import TankDetails from "./components/tankDetails/TankDetails";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="page-content">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop/:id" element={<ProductDetails />} />
					<Route path="/tanks" element={<MyTanks />} />
					<Route path="/tanks/:tankId" element={<TankDetails />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
