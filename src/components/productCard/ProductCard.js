import React from "react";
import getStars from "../designUtils/getStars.js";
import "./ProductCard.scss";

const ProductCard = ({ product, name }) => {
	const {
		id,
		product_name,
		plant_name,
		pic,
		plant_image,
		brand,
		price,
		rating,
		in_stock,
	} = product;

	return (
		<div className="product-card">
			{!in_stock && (
				<div className="product-card__sold-out-badge">Sold Out</div>
			)}
			<div className="product-card__canvas">
				<a href={`/shop/${name}/${id}`}>
					<img
						src={pic || plant_image}
						alt={product_name || plant_name}
					/>
				</a>
			</div>
			<div className="product-card__content">
				{product_name && (
					<div className="product-card__content__choices">
						<p>More Choices available</p>
					</div>
				)}
				<div className="product-card__content__title">
					<a href={`/shop/${name}/${id}`}>
						<strong>{brand && brand}</strong>
						<span>{product_name || plant_name}</span>
					</a>
				</div>
				<div className="product-card__content__rating">
					{rating && getStars(rating)}
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
