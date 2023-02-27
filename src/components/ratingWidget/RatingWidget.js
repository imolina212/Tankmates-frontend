import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import "./RatingWidget.scss";

const RatingWidget = () => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	return (
		<div className="ratingWidget">
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<label key={i}>
						<input
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar
							className="star"
							color={
								ratingValue <= (hover || rating)
									? "#ff9800"
									: "e4e5e9"
							}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
		</div>
	);
};

export default RatingWidget;
