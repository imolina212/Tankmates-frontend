import React from "react";

import Total from "../../components/cart/Total";
import CartItem from "../../components/cart/CartItem";
import { useSelector } from "react-redux";
import "./Cart.scss";

function Cart() {
	const cart = useSelector((state) => state.cart);

	return (
		<div className="cart">
			<div className="cart__left">
				<div>
					<h3>Shopping Cart</h3>
					{cart?.map((item) => (
						<CartItem
							key={item.id}
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							quantity={item.quantity}
						/>
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
