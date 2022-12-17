import React from "react";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./_colors.scss";

const getStars = (rating) => {
	let starsToAdd = rating;
	let ratingStars = [];

	while (ratingStars.length < 5) {
		if (starsToAdd >= 1) {
			ratingStars.push(
				<span className="star" style={{ padding: "0px 1.5px" }}>
					<BsStarFill style={{ color: "#ff9800" }} />
				</span>
			);
			starsToAdd--;
		}
		if (starsToAdd > 0 && starsToAdd < 1) {
			ratingStars.push(
				<span className="star" style={{ padding: "0px 1.5px" }}>
					<BsStarHalf style={{ color: "#ff9800" }} />
				</span>
			);
			starsToAdd = 0;
		}

		if (starsToAdd === 0 && ratingStars.length < 5) {
			ratingStars.push(
				<span className="star" style={{ padding: "0px 1.5px" }}>
					<BsStar style={{ color: "#ff9800" }} />
				</span>
			);
		}
	}
	return ratingStars;
};

export default getStars;
