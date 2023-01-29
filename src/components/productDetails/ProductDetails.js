import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import getStars from "../designUtils/getStars.js";
import CustomerReviews from "../customerReviews/CustomerReviews.js";
import ProductReviewsList from "../productReviewsList/ProductReviewsList.js";
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
	const [quantity, setQuantity] = useState(1);
	const { id } = useParams();
	const URL = process.env.REACT_APP_API_URL;
	const dispatch = useDispatch();

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

	useEffect(() => {
		axios
			.get(`${URL}/product-images/${id}`)
			.then((response) => {
				setProductImages(response.data);
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
			<StickyProductHeader
				id={id}
				title={product_name}
				price={price}
				pic={pic}
			/>
			<div className="productDetails__image">
				<ImageAndThumbnailSlider imageArray={productImages} />
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
									title: product_name,
									brand,
									image: pic,
									price,
									rating,
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
			<div className="productDetails__reviews">
				<CustomerReviews />
				<div className="productDetails__review-list">
					<ProductReviewsList />
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
