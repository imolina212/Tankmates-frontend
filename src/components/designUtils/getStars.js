import React from "react";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./_colors.scss";

const getStars = (rating) => {
	let starsToAdd = rating;
	let ratingStars = [];
	let i = 0;

	while (ratingStars.length < 5) {
		if (starsToAdd >= 1) {
			ratingStars.push(
				<span key={i} className="star" style={{ padding: "0px 1.5px" }}>
					<BsStarFill style={{ color: "#ff9800" }} />
				</span>
			);
			starsToAdd--;
			i++;
		}
		if (starsToAdd > 0 && starsToAdd < 1) {
			ratingStars.push(
				<span key={i} className="star" style={{ padding: "0px 1.5px" }}>
					<BsStarHalf style={{ color: "#ff9800" }} />
				</span>
			);
			starsToAdd = 0;
			i++;
		}

		if (starsToAdd === 0 && ratingStars.length < 5) {
			ratingStars.push(
				<span key={i} className="star" style={{ padding: "0px 1.5px" }}>
					<BsStar style={{ color: "#ff9800" }} />
				</span>
			);
			i++;
		}
	}
	return ratingStars;
};

export default getStars;
