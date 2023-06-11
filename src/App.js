import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import Register from "./components/register/Register";
import Reset from "./components/reset/Reset";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.scss";

function App() {
	const [userId, setUserId] = useState(0);
	const location = useLocation();
	return (
		<div className="App">
			<ScrollToTop />
			<NavBar loggedIn={userId} setUserId={setUserId} />
			<div className="page-content">
				{location.pathname.length > 1 && <BreadCrumbs />}
				<Routes loggedInUserId={userId}>
					<Route
						exact
						path="/"
						element={<Home loggedInUserId={userId} />}
					/>
					<Route
						path="/shop/:productType"
						element={<Shop loggedInUserId={userId} />}
					/>
					<Route
						path="/shop/:productType/:id"
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
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/reset" element={<Reset />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
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
