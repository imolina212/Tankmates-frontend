import React from "react";

import "./CustomerReviews.scss";
import getStars from "../designUtils/getStars";

const CustomerReviews = () => {
	return (
		<div className="customer-reviews">
			<div className="customer-reviews__header">Customer Reviews</div>
			<div className="customer-reviews__overview">
				<div className="customer-reviews__overview__summary">
					<p>
						<span className="stars">{getStars(5)}</span> 5 out of 5
					</p>
					<p>Based on 132 reviews</p>
				</div>
				<div className="customer-reviews__overview__histogram">
					<div className="customer-reviews__overview__histogram__item">
						<div className="stars">{getStars(5)}</div>
						<div className="customer-reviews__progress-bar">
							<div className="customer-reviews__progress-bar__container"></div>
						</div>
						<div>126</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="stars">{getStars(4)}</div>
						<div className="customer-reviews__progress-bar">
							<div className="customer-reviews__progress-bar__container"></div>
						</div>
						<div>4</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="stars">{getStars(3)}</div>
						<div className="customer-reviews__progress-bar">
							<div className="customer-reviews__progress-bar__container"></div>
						</div>
						<div>1</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="stars">{getStars(2)}</div>
						<div className="customer-reviews__progress-bar">
							<div className="customer-reviews__progress-bar__container"></div>
						</div>
						<div>1</div>
					</div>
					<div className="customer-reviews__overview__histogram__item">
						<div className="stars">{getStars(1)}</div>
						<div className="customer-reviews__progress-bar">
							<div className="customer-reviews__progress-bar__container"></div>
						</div>
						<div>0</div>
					</div>
				</div>
				<div className="customer-reviews__overview__button">
					<button type="submit">Write a review</button>
				</div>
			</div>
		</div>
	);
};

export default CustomerReviews;
