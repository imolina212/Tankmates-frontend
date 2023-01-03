import React, { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ImageAndThumbnailSlider.scss";

const ImageAndThumbnailSlider = ({ id, pic: imageArray }) => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [hover, setHover] = useState(false);

	const handleClick = (index) => {
		setSelectedImg(index);
	};

	return (
		<div className="imageSlider">
			<div className="imageSlider__selected">
				<div
					className="imageSlider__selected__item"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<div
						className={
							hover
								? "imageSlider__selected__left"
								: "imageSlider__selected__left hide"
						}
						onClick={() => {
							selectedImg > 0
								? setSelectedImg(selectedImg - 1)
								: setSelectedImg(imageArray.length - 1);
						}}
					>
						<IoIosArrowBack className="imageSlider__selected__btn" />
					</div>
					<img src={imageArray[selectedImg]} alt="" />
					<div
						className={
							hover
								? "imageSlider__selected__right"
								: "imageSlider__selected__right hide"
						}
						onClick={() => {
							selectedImg < imageArray.length - 1
								? setSelectedImg(selectedImg + 1)
								: setSelectedImg(0);
						}}
					>
						<IoIosArrowForward className="imageSlider__selected__btn" />
					</div>
				</div>
			</div>
			<div className="imageSlider__collection">
				{imageArray.map((image, i) => {
					return (
						<div
							className={
								selectedImg === i
									? "imageSlider__collection__item imageSlider__collection__item__selected"
									: "imageSlider__collection__item"
							}
						>
							<img
								src={image}
								alt=""
								onClick={() => handleClick(i)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageAndThumbnailSlider;
