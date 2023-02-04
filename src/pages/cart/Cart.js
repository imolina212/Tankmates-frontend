import React from "react";

import Total from "../../components/cart/Total";
import CartItem from "../../components/cart/CartItem";
import { useSelector } from "react-redux";
import Button from "./../../components/button/Button";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart() {
	const cart = useSelector((state) => state.cart);

	return (
		<div className="cart">
			<div className="cart__left">
				<div>
					<h3>Your Shopping Cart</h3>
					{!cart.length && (
						<div className="cart__left__message">
							<p>To view cart items please</p>
							<Link to="/shop/products">
								<Button
									name="Continue Shopping"
									variant="primary"
									size="sq large"
									arrow={true}
								/>
							</Link>
						</div>
					)}
					{cart?.map((item, index) => (
						<CartItem key={item.id + index} {...item} />
					))}
				</div>
			</div>

			<div className="cart__right">
				<Total />
			</div>
		</div>
	);
}

export default Cart;
