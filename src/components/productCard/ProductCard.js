import React, { useEffect, useState } from "react";

import axios from "axios";
import getStars from "../designUtils/getStars.js";
import getProductRating from "../designUtils/getProductRating.js";
import "./ProductCard.scss";

const API = process.env.REACT_APP_API_URL;

const ProductCard = ({ productType, product }) => {
	const { id, name, image, brand, price, in_stock } = product;
	const [productReviews, setProductReviews] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/${productType.slice(0, -1)}-reviews/${id}`)
			.then((response) => {
				if (response.data && typeof response.data === "object") {
					setProductReviews(response.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [productType, id]);

	return (
		<div className="product-card">
			{!in_stock && (
				<div className="product-card__sold-out-badge">Sold Out</div>
			)}
			<div className="product-card__canvas">
				<a href={`/shop/${productType}/${id}`}>
					<img src={image} alt={name} />
				</a>
			</div>
			<div className="product-card__content">
				<div className="product-card__content__choices">
					<p>More Choices available</p>
				</div>
				<div className="product-card__content__title">
					<a href={`/shop/${productType}/${id}`}>
						<strong>{brand && brand}</strong>
						<span>{name}</span>
					</a>
				</div>
				<div className="product-card__content__rating">
					{getStars(getProductRating(productReviews))}
					<span className="product-card__content__rating__text">
						{productReviews.length} Reviews
					</span>
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
