import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import getStars from "../designUtils/getStars.js";
import CustomerReviews from "../customerReviews/CustomerReviews.js";
import QuantityPicker from "../quantityPicker/QuantityPicker.js";
import StickyProductHeader from "../stickyProductHeader/StickyProductHeader.js";
import Button from "../button/Button.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";
import ImageAndThumbnailSlider from "../imageAndThumbnailSlider/ImageAndThumbnailSlider.js";
import "./ProductDetails.scss";

function ProductDetails() {
	const [product, setProduct] = useState({});
	const [productImages, setProductImages] = useState([]);
	const [productReviews, setProductReviews] = useState([]);
	const [error, setError] = useState("");
	const [quantity, setQuantity] = useState(1);
	const { id, productType } = useParams();
	const URL = process.env.REACT_APP_API_URL;
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get(`${URL}/${productType}/${id}`)
			.then((response) => {
				if (response.data) {
					setProduct(response.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [URL, productType, id]);

	useEffect(() => {
		axios
			.get(`${URL}/${productType.slice(0, -1)}-images/${id}`)
			.then((response) => {
				if (response.data) {
					setProductImages(response.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [URL, productType, id]);

	useEffect(() => {
		axios
			.get(`${URL}/${productType.slice(0, -1)}-reviews/${id}`)
			.then((response) => {
				if (response.data && typeof response.data === "object") {
					setProductReviews(response.data);
					setError(null);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [URL, productType, id]);

	const {
		brand,
		co2_requirement,
		description,
		image,
		in_stock,
		min_temp,
		max_temp,
		min_ph,
		max_ph,
		origin,
		placement,
		price,
		name,
		rating,
		scientific_name,
		skill_level,
	} = product;

	return (
		<div className="productDetails">
			<StickyProductHeader
				product={product}
				quantity={quantity}
				setQuantity={setQuantity}
			/>
			<div className="productDetails__image">
				<ImageAndThumbnailSlider imageArray={productImages} />
			</div>
			{Object.keys(product).length && (
				<div className="productDetails__info">
					<div className="productDetails__info__title">
						{name}
						{brand && (
							<div>
								<button>By {brand}</button>
							</div>
						)}
					</div>
					<div className="productDetails__info__rating">
						{rating && getStars(rating)}
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
						{description}
					</div>
					<QuantityPicker
						label="Quantity :"
						quantity={quantity}
						onIncrement={() => setQuantity(quantity + 1)}
						onDecrement={() =>
							setQuantity(Math.max(quantity - 1, 1))
						}
					/>
					<Button
						variant="primary"
						name={in_stock ? "Add To Cart" : "Sold Out"}
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
			)}
			<div className="productDetails__specifications">
				<div className="productDetails__specifications__header">
					Directions/Specifications
				</div>
				<div className="productDetails__specifications__details">
					<p>How To Use:</p>
					<p>Plant Info </p>
					<p>Scientific Name: {scientific_name} </p>
					<p>Native To: {origin} </p>
					<p>
						Temperature: {min_temp}-{max_temp} Fahrenheit
					</p>
					<p>
						pH: {min_ph}-{max_ph}
					</p>
					<p>CO2: {co2_requirement}</p>
					<p>Skill Level: {skill_level} </p>
					<p>Placement: {placement} </p>
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
			<div className="productDetails__reviews">
				{productReviews && (
					<CustomerReviews
						error={error}
						productReviews={productReviews}
						setProductReviews={setProductReviews}
					/>
				)}
			</div>
		</div>
	);
}

export default ProductDetails;
