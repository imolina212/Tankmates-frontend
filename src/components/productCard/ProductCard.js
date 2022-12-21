import React from "react";
import getStars from "../designUtils/getStars.js";
import "./ProductCard.scss";

const ProductCard = ({
	id,
	product_name: title,
	pic: image,
	price,
	brand,
	rating,
}) => {
	return (
		<div className="product-card">
			<div className="product-card__canvas">
				<a href={`/shop/${id}`}>
					<img src={image} alt="" />
				</a>
			</div>
			<div className="product-card__content">
				<div className="product-card__content__choices">
					<p>More Choices available</p>
				</div>
				<div className="product-card__content__title">
					<a href={`/shop/${id}`}>
						<strong>{brand}</strong>
						<span>{title}</span>
					</a>
				</div>
				<div className="product-card__content__rating">
					{getStars(rating)}
				</div>
				<div className="product-card__content__pricing">${price}</div>
				<div className="product-card__content__message">
					<p>FREE 1-3 day shipping over $49</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
