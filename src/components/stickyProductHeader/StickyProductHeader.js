import React, { useState } from "react";

import QuantityPicker from "../quantityPicker/QuantityPicker";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";
import "./StickyProductHeader.scss";

const StickyProductHeader = ({
	id,
	title,
	brand,
	price,
	pic,
	rating,
	in_stock,
}) => {
	const [visibility, setVisibility] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const changeVisibilityOnScroll = () => {
		if (window.scrollY >= 400) {
			setVisibility(true);
		} else {
			setVisibility(false);
		}
	};

	window.addEventListener("scroll", changeVisibilityOnScroll);

	return (
		<div
			className={
				visibility
					? "sticky-product-header"
					: "sticky-product-header sticky-product-header__hide"
			}
		>
			<div className="sticky-product-header__image">
				<img src={pic} alt="product-thumbnail" />
			</div>
			<div className="sticky-product-header__details">
				<div className="sticky-product-header__details__title">
					{title}
				</div>
				<div className="sticky-product-header__details__price">
					$ {price}
				</div>
			</div>
			<QuantityPicker
				label="Qty :"
				id={id}
				quantity={quantity}
				onIncrement={() => setQuantity(quantity + 1)}
				onDecrement={() => setQuantity(Math.max(quantity - 1, 1))}
			/>
			<Button
				name={
					in_stock
						? `Add to Cart - $${(price * quantity).toFixed(2)}`
						: "Sold Out"
				}
				variant="primary"
				size="sq large"
				arrow={true}
				onClick={() =>
					in_stock &&
					dispatch(
						addToCart({
							id,
							title,
							brand,
							pic,
							price,
							rating,
						})
					)
				}
			/>
		</div>
	);
};

export default StickyProductHeader;
