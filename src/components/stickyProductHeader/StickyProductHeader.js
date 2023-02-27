import React, { useState } from "react";

import QuantityPicker from "../quantityPicker/QuantityPicker";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";
import "./StickyProductHeader.scss";

const StickyProductHeader = ({ product, quantity, setQuantity }) => {
	const [visibility, setVisibility] = useState(false);
	const dispatch = useDispatch();
	const { id, name, brand, price, image, rating, in_stock } = product;

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
				<img src={image} alt="product-thumbnail" />
			</div>
			<div className="sticky-product-header__details">
				<div className="sticky-product-header__details__title">
					{name}
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
							title: name,
							brand,
							image,
							price,
							rating,
							quantity,
						})
					)
				}
			/>
		</div>
	);
};

export default StickyProductHeader;
