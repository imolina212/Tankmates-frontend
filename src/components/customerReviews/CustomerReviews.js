import React, { useState } from "react";

import getStars from "../designUtils/getStars";
import Button from "./../button/Button";
import NewReviewForm from "../newReviewForm/NewReviewForm";
import "./CustomerReviews.scss";

const CustomerReviews = () => {
	const [writeReview, setWriteReview] = useState(true);

	const getPercentageOfRating = (number, total) => {
		return `${(number / total).toFixed(2) * 100}%`;
	};

	return (
		<div className="customer-reviews">
			<div className="customer-reviews__header">Customer Reviews</div>
			<div className="customer-reviews__overview">
				<div className="customer-reviews__overview__summary">
					<p>
						<span className="stars">{getStars(5)}</span>
						<span className="average">5 out of 5</span>
					</p>
					<p className="text">Based on 132 reviews</p>
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
									width: getPercentageOfRating(125, 135),
								}}
							></div>
						</div>
						<div>126</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(4)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{ width: getPercentageOfRating(4, 135) }}
							></div>
						</div>
						<div>4</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(3)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{ width: getPercentageOfRating(1, 135) }}
							></div>
						</div>
						<div>1</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(2)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{ width: getPercentageOfRating(1, 135) }}
							></div>
						</div>
						<div>1</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="customer-reviews__overview__histogram__item__stars">
							{getStars(1)}
						</div>
						<div className="customer-reviews__progress-bar">
							<div
								className="customer-reviews__progress-bar__container"
								style={{ width: getPercentageOfRating(0, 135) }}
							></div>
						</div>
						<div>0</div>
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
		</div>
	);
};

export default CustomerReviews;
