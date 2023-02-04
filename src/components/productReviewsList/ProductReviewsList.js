import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import getStars from "../designUtils/getStars";
import { IoPersonOutline } from "react-icons/io5";
import "./ProductReviewsList.scss";

const URL = process.env.REACT_APP_API_URL;

const ProductReviewsList = () => {
	const [productReviews, setProductReviews] = useState([]);
	const { id, name } = useParams();

	useEffect(() => {
		axios
			.get(`${URL}/${name.slice(0, -1)}-reviews/${id}`)
			.then((response) => {
				setProductReviews(response.data);
			})
			.catch((err) => {
				throw err;
			});
	}, [id, name]);

	return (
		<div className="productReviewsList">
			{productReviews.length ? (
				productReviews.map((review) => {
					const { content, date_created, rating, title, username } =
						review;
					return (
						<div className="productReviewsList__item">
							<div className="productReviewsList__item__rating">
								<span className="productReviewsList__item__rating__stars">
									{getStars(rating)}
								</span>
								<span className="productReviewsList__item__rating__timestamp">
									{new Date(date_created).toLocaleDateString(
										"en-us"
									)}
								</span>
							</div>
							<div className="productReviewsList__item__profile">
								<div className="productReviewsList__item__profile__pic-container">
									<IoPersonOutline className="pic" />
								</div>
								<div className="productReviewsList__item__profile__name">
									{username}
								</div>
								<div className="productReviewsList__item__profile__location">
									San Fransisco, CA, US
								</div>
							</div>
							<div className="productReviewsList__item__content">
								<div className="productReviewsList__item__content__title">
									{title}
								</div>
								<div className="productReviewsList__item__body">
									<p>{content}</p>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<div className="productReviewsList--empty">
					Be the first to leave a review!
				</div>
			)}
			<div className="productReviewsList__paginate">
				<div className="productReviewsList__paginate__btn">
					Load More
				</div>
			</div>
		</div>
	);
};

export default ProductReviewsList;
