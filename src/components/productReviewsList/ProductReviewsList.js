import React from "react";

import getStars from "../designUtils/getStars";
import { IoPersonOutline } from "react-icons/io5";
import "./ProductReviewsList.scss";

const ProductReviewsList = () => {
	return (
		<div className="productReviewsList">
			<div className="productReviewsList__item">
				<div className="productReviewsList__item__rating">
					<span className="productReviewsList__item__rating__stars">
						{getStars(5)}
					</span>
					<span className="productReviewsList__item__rating__timestamp">
						08/27/22
					</span>
				</div>
				<div className="productReviewsList__item__profile">
					<div className="productReviewsList__item__profile__pic-container">
						<IoPersonOutline className="pic" />
					</div>
					<div className="productReviewsList__item__profile__name">
						Emmanuel A.
					</div>
					<div className="productReviewsList__item__profile__location">
						San Fransisco, CA, US
					</div>
				</div>
				<div className="productReviewsList__item__content">
					<div className="productReviewsList__item__content__title">
						Excellent carnivore treat
					</div>
					<div className="productReviewsList__item__body">
						<p>
							I am always pleased with the food, plants and other
							products I order from you. I like how you guys
							package the plants and products. Thanks so much!
						</p>
					</div>
				</div>
			</div>
			<div className="productReviewsList__item">
				<div className="productReviewsList__item__rating">
					<span className="productReviewsList__item__rating__stars">
						{getStars(5)}
					</span>
					<span className="productReviewsList__item__rating__timestamp">
						12/11/22
					</span>
				</div>
				<div className="productReviewsList__item__profile">
					<div className="productReviewsList__item__profile__pic-container">
						<IoPersonOutline className="pic" />
					</div>
					<div className="productReviewsList__item__profile__name">
						John C.
					</div>
					<div className="productReviewsList__item__profile__location">
						Punta Gorda, FL, US
					</div>
				</div>
				<div className="productReviewsList__item__content">
					<div className="productReviewsList__item__content__title">
						Less waste,less cost,win win
					</div>
					<div className="productReviewsList__item__body">
						<p>
							These pellets are a great alternative when I am not
							able to feed live foods!
						</p>
					</div>
				</div>
			</div>
			<div className="productReviewsList__item">
				<div className="productReviewsList__item__rating">
					<span className="productReviewsList__item__rating__stars">
						{getStars(5)}
					</span>
					<span className="productReviewsList__item__rating__timestamp">
						10/17/22
					</span>
				</div>
				<div className="productReviewsList__item__profile">
					<div className="productReviewsList__item__profile__pic-container">
						<IoPersonOutline className="pic" />
					</div>
					<div className="productReviewsList__item__profile__name">
						Dennis M.
					</div>
					<div className="productReviewsList__item__profile__location">
						San Fransisco, CA, US
					</div>
				</div>
				<div className="productReviewsList__item__content">
					<div className="productReviewsList__item__content__title">
						Great daily food.
					</div>
					<div className="productReviewsList__item__body">
						<p>
							I have been feeding my oscar cichlid this food as
							his primary diet for over 5 years and I still have a
							beautiful young vibrant fish.
						</p>
					</div>
				</div>
			</div>
			<div className="productReviewsList__paginate">
				<div className="productReviewsList__paginate__btn">
					Load More
				</div>
			</div>
		</div>
	);
};

export default ProductReviewsList;
