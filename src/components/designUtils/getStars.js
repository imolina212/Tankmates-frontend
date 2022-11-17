import React from "react";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const getStars = (rating) => {
	let starsToAdd = rating;
	let ratingStars = [];

	while (ratingStars.length < 5) {
		if (starsToAdd >= 1) {
			ratingStars.push(<BsStarFill />);
			starsToAdd--;
		}
		if (starsToAdd > 0 && starsToAdd < 1) {
			ratingStars.push(<BsStarHalf />);
			starsToAdd = 0;
		}

		if (starsToAdd === 0 && ratingStars.length < 5) {
			ratingStars.push(<BsStar />);
		}
	}
	return ratingStars;
};

export default getStars;
