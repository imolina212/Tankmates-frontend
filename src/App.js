import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import NavBar from "./components/navbar/NavBar.js";
import MyTanks from "./pages/myTanks/MyTanks.js";
import ProductDetails from "./components/productDetails/ProductDetails";
import TankDetails from "./components/tankDetails/TankDetails";
import Users from "./pages/users/Users";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import NewTankmate from "./components/tankmates/NewTankmate";
import NewTankLog from "./components/newTankLog/NewTankLog";
import About from "./pages/about/About";
import Signup from "./components/signup/Signup";
import "./App.scss";

function App() {
	const [userId, setUserId] = useState(0);

	return (
		<div className="App">
			<NavBar loggedIn={userId} setUserId={setUserId} />
			<div className="page-content">
				<Routes loggedInUserId={userId}>
					<Route
						exact
						path="/"
						element={<Home loggedInUserId={userId} />}
					/>
					<Route
						path="/shop"
						element={<Shop loggedInUserId={userId} />}
					/>
					<Route
						path="/shop/:id"
						element={<ProductDetails loggedInUserId={userId} />}
					/>
					<Route
						path="/users/:userId/tanks/:tankId"
						element={<TankDetails loggedInUserId={userId} />}
					/>
					<Route
						path="/users/:userId/tanks/:tankId/newTankmate"
						element={<NewTankmate loggedInUserId={userId} />}
					/>
					<Route
						path="/users/:userId/tanks/:tankId/newTankLog"
						element={<NewTankLog loggedInUserId={userId} />}
					/>
					<Route
						path="/tanks"
						element={<MyTanks loggedInUserId={userId} />}
					/>
					<Route
						path="/users"
						element={<Users loggedInUserId={userId} />}
					/>
					<Route path="/about" element={<About />} />
					<Route
						path="/login"
						element={
							<Login
								setUser={setUserId}
								loggedInUserId={userId}
							/>
						}
					/>
					<Route
						path="/signup"
						element={
							<Signup
								setUser={setUserId}
								loggedInUserId={userId}
							/>
						}
					/>
					<Route
						path="/cart"
						element={<Cart loggedInUserId={userId} />}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
