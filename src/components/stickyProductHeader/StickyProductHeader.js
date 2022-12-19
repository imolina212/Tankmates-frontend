import React, { useState } from "react";

import QuantityPicker from "../quantityPicker/QuantityPicker";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";
import "./StickyProductHeader.scss";

const StickyProductHeader = ({ id, title, brand, price, pic, rating }) => {
	const [bgColor, setBgColor] = useState(false);
	const dispatch = useDispatch();

	const changeBgColorOnScroll = () => {
		const y = window.scrollY;

		if (y >= 400) {
			setBgColor(true);
		} else {
			setBgColor(false);
		}
	};

	window.addEventListener("scroll", changeBgColorOnScroll);

	return (
		<div
			className={
				bgColor
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
			<QuantityPicker label="Qty" id={id} />
			<Button
				name="Add to Cart"
				variant="primary"
				size="sq large"
				onClick={() =>
					dispatch(
						addToCart({
							id,
							title,
							brand,
							image: pic,
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
