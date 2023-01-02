import React, { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ImageAndThumbnailSlider.scss";

const ImageAndThumbnailSlider = ({ id }) => {
	let imageArray = [
		{ id: 0, src: "/productImages/promo1_1.webp" },
		{ id: 1, src: "/productImages/promo2_1.jpg" },
		{ id: 2, src: "/productImages/promo3.jpg" },
		{ id: 3, src: "https://via.placeholder.com/150" },
		{ id: 4, src: "https://via.placeholder.com/150" },
		{ id: 5, src: "https://via.placeholder.com/150" },
		{ id: 6, src: "https://via.placeholder.com/150" },
	];
	const [selectedImg, setSelectedImg] = useState(0);
	const [hover, setHover] = useState(false);

	const handleClick = (index) => {
		console.log("index ->", index);
		setSelectedImg(imageArray[index]);
	};

	return (
		<div className="imageSlider">
			<div className="imageSlider__selected">
				<div className="imageSlider__selected__item">
					<div
						className={
							hover
								? "imageSlider__selected__left"
								: "imageSlider__selected__left hide"
						}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						onClick={() => {
							selectedImg > 0 && setSelectedImg(selectedImg - 1);
						}}
					>
						<IoIosArrowBack className="imageSlider__selected__btn" />
					</div>
					<img
						src={imageArray[selectedImg].src}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						alt=""
					/>
					<div
						className={
							hover
								? "imageSlider__selected__right"
								: "imageSlider__selected__right hide"
						}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						onClick={() => {
							selectedImg < imageArray.length - 1 &&
								setSelectedImg(selectedImg + 1);
						}}
					>
						<IoIosArrowForward className="imageSlider__selected__btn" />
					</div>
				</div>
			</div>
			<div className="imageSlider__collection">
				{imageArray.map((image, i) => {
					return (
						<img
							className={
								image.id === i
									? "imageSlider__collection__item__selected"
									: "imageSlider__collection__item"
							}
							src={image.src}
							alt=""
							onClick={() => handleClick(i)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ImageAndThumbnailSlider;
