import React, { useState } from "react";

import QuantityPicker from "../quantityPicker/QuantityPicker";
import Button from "../button/Button";
import "./StickyProductHeader.scss";

const StickyProductHeader = () => {
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
				<img src="https://via.placeholder.com/80" />
			</div>
			<div className="sticky-product-header__details">
				<div className="sticky-product-header__details__title">
					Aquarium Co-Op Auto Feeder
				</div>
				<div className="sticky-product-header__details__price">
					$24.99
				</div>
			</div>
			<QuantityPicker name="Qty" />
			<Button name="Add to Cart" variant="primary" size="sq large" />
		</div>
	);
};

export default StickyProductHeader;
