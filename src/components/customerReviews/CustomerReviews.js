import React, { useState } from "react";

import getStars from "../designUtils/getStars";
import Button from "./../button/Button";
import NewReviewForm from "../newReviewForm/NewReviewForm";
import ProductReviewsList from "../productReviewsList/ProductReviewsList";
import "./CustomerReviews.scss";

const CustomerReviews = ({ productReviews, setProductReviews }) => {
	const [writeReview, setWriteReview] = useState(true);

	const getPercentageOfRating = (number, total) => {
		if (total === 0) return 0;
		return `${(number / total).toFixed(2) * 100}%`;
	};

	let ratingAvg = productReviews.length
		? productReviews
				.map((review) => review?.rating)
				.reduce((a, b) => a + b, 0) / productReviews.length
		: 0;

	const getTargetRatingCount = (productReviews, target) => {
		let ratingCount = {};

		for (let i = 0; i < productReviews.length; i++) {
			if (ratingCount[productReviews[i].rating]) {
				ratingCount[productReviews[i].rating]++;
			} else {
				ratingCount[productReviews[i].rating] = 1;
			}
		}
		return ratingCount[target] || 0;
	};

	return (
		<div className="customer-reviews">
			<div className="customer-reviews__header">Customer Reviews</div>
			<div className="customer-reviews__overview">
				<div className="customer-reviews__overview__summary">
					<p>
						<span className="stars">{getStars(ratingAvg)}</span>
						<span className="average">{ratingAvg} out of 5</span>
					</p>
					<p className="text">
						Based on {productReviews.length} reviews
					</p>
				</div>
				<div className="customer-reviews__overview__histogram">
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(5)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{
									width: getPercentageOfRating(
										getTargetRatingCount(productReviews, 5),
										productReviews.length
									),
								}}
							></div>
						</div>
						<div>
							{
								productReviews.filter(
									(review) => review.rating === 5
								).length
							}
						</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(4)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{
									width: getPercentageOfRating(
										getTargetRatingCount(productReviews, 4),
										productReviews.length
									),
								}}
							></div>
						</div>
						<div>
							{
								productReviews?.filter(
									(review) => review.rating === 4
								).length
							}
						</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(3)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{
									width: getPercentageOfRating(
										getTargetRatingCount(productReviews, 3),
										productReviews.length
									),
								}}
							></div>
						</div>
						<div>
							{
								productReviews.filter(
									(review) => review.rating === 3
								).length
							}
						</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(2)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{
									width: getPercentageOfRating(
										getTargetRatingCount(productReviews, 2),
										productReviews.length
									),
								}}
							></div>
						</div>
						<div>
							{
								productReviews.filter(
									(review) => review.rating === 2
								).length
							}
						</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(1)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{
									width: getPercentageOfRating(
										getTargetRatingCount(productReviews, 1),
										productReviews.length
									),
								}}
							></div>
						</div>
						<div>
							{
								productReviews?.filter(
									(review) => review.rating === 1
								).length
							}
						</div>
					</div>
				</div>
				<div className="customer-reviews__overview__button">
					<Button
						name={writeReview ? "Cancel Review" : "Write A Review"}
						type="submit"
						onClick={() => setWriteReview(!writeReview)}
						variant="primary"
						size="rnd small"
					/>
				</div>
			</div>
			<div
				className={
					writeReview
						? "customer-reviews__newForm"
						: "customer-reviews__newForm__hide"
				}
			>
				<NewReviewForm
					writeReview={writeReview}
					setWriteReview={setWriteReview}
				/>
			</div>
			<div>
				<ProductReviewsList
					productReviews={productReviews}
					setProductReviews={setProductReviews}
				/>
			</div>
		</div>
	);
};

export default CustomerReviews;
