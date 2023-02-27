const getProductRating = (productReviews) => {
	if (productReviews.length === 0) return 0;
	let rating = 0;

	for (const review of productReviews) {
		rating = rating + review.rating;
	}
	return rating / productReviews.length;
};

export default getProductRating;
