import React from "react";

import RatingWidget from "../ratingWidget/RatingWidget.js";
import "./NewReviewForm.scss";

const NewReviewForm = ({ writeReview, setWriteReview }) => {
	return (
		<form className={writeReview ? "review-form" : "review-form__hide"}>
			<div className="review-form__title">Write a review</div>
			<div className="review-form__fieldset">
				<label>Rating</label>
				<RatingWidget />
			</div>
			<div className="review-form__fieldset rating">
				<label htmlFor>Review Title</label>
				<input
					id="review-title"
					name="review-title"
					type="text"
					placeholder="Give your review a title"
				/>
			</div>
			<div className="review-form__fieldset">
				<label>Review</label>
				<textarea
					id="review-body"
					name="review-body"
					type="text"
					placeholder="Write your comments here"
				/>
			</div>
			<div className="review-form__fieldset">
				<label>Name</label>
				<input
					id="review-reviewer-name"
					name="review-reviewer-name"
					type="text"
					placeholder="Enter you name (public)"
				/>
			</div>
			<div className="review-form__fieldset">
				<label>Email</label>
				<input
					id="review-reviewer-email"
					name="review-reviewer-email"
					type="text"
					placeholder="Enter you email (private)"
				/>
			</div>
			<div className="review-form__fieldset-actions">
				<div
					className="btn-secondary"
					onClick={() => setWriteReview(!writeReview)}
				>
					Cancel Review
				</div>
				<input type="submit" value="Submit Review" />
			</div>
		</form>
	);
};

export default NewReviewForm;
