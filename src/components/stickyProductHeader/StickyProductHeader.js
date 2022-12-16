import React, { useState } from "react";

import QuantityPicker from "../quantityPicker/QuantityPicker";
import Button from "../button/Button";
import "./StickyProductHeader.scss";

const StickyProductHeader = ({ title, price, pic }) => {
	const [bgColor, setBgColor] = useState(false);

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
				<img src={pic} />
			</div>
			<div className="sticky-product-header__details">
				<div className="sticky-product-header__details__title">
					{title}
				</div>
				<div className="sticky-product-header__details__price">
					$ {price}
				</div>
			</div>
			<QuantityPicker name="Qty" />
			<Button name="Add to Cart" variant="primary" size="sq large" />
		</div>
	);
};

export default StickyProductHeader;
