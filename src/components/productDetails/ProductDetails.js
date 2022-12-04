import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import getStars from "../designUtils/getStars.js";
import CustomerReviews from "../customerReviews/CustomerReviews.js";
import NewReviewForm from "../newReviewForm/NewReviewForm.js";
import "./ProductDetails.scss";

function ProductDetails() {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	const URL = process.env.REACT_APP_API_URL;

	useEffect(() => {
		axios
			.get(`${URL}/products/${id}`)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [URL, id]);

	const {
		product_name,
		brand,
		rating,
		price,
		in_stock,
		product_description,
		pic,
	} = product;

	return (
		<div className="productDetails">
			<div className="productDetails__image">
				<img src={pic} alt="" />
			</div>
			{Object.keys(product).length && (
				<div className="productDetails__info">
					<div className="productDetails__info__title">
						{product_name}
						<div>
							<button>By {brand}</button>
						</div>
					</div>
					<div className="productDetails__info__rating">
						{getStars(rating)}
					</div>
					<div className="productDetails__info__price">$ {price}</div>
					<div className="productDetails__info__availability">
						Availability:{" "}
						{in_stock ? (
							<span className="green">in stock</span>
						) : (
							<span className="red">out of stock</span>
						)}
					</div>
					<div className="productDetails__info__description">
						{product_description}
					</div>
				</div>
			)}
			<div className="productDetails__specifications">
				<div className="productDetails__specifications__header">
					Directions/Specifications
				</div>
				<div className="productDetails__specifications__details">
					<p>How To Use:</p>
					<p>Plant Info </p>
					<p>Scientific Name: Vesicularia sp. </p>
					<p>Native To: Southeast Asia </p>
					<p>Skill Level: Easy </p>
					<p>Growth Rate: Slow</p>
					<p>Light Demand: Low</p>
					<p>Temperature: 65-80 Fahrenheit</p>
					<p>pH: 6.8-8.0</p>
					<p>CO2: None</p>
					<p>
						Your Java Moss Mat can be used in a variety of different
						ways:
					</p>
					<ol>
						<li>
							Set the mat on top of substrate to start a carpet
						</li>
						<li>
							Wrap the mat around decor to enhance any surface
						</li>
					</ol>
					<p>
						In time, Java Moss will grab hold of and cover any
						desired surface. If growth becomes too dense, trim with
						scissors.
					</p>
				</div>
			</div>
			<CustomerReviews />
			<div className="productDetails__new-review-form-wrapper">
				<NewReviewForm />
			</div>
		</div>
	);
}

export default ProductDetails;
