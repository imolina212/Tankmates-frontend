import React from "react";
import { Link } from "react-router-dom";

import "./Categories.scss";
import category1 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetTropical Freshwater.jpeg";
import category2 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetMarine Fish.jpeg";
import category3 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetBetta.jpeg";
import category4 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetKoi & Pond Fish.jpeg";
import category5 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetGoldfish.jpeg";
import category6 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetBottom Feeder.jpeg";
import category7 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetMarine Invertebrate.jpeg";
import category8 from "../../images/1_Fish_DepartmentPage_CircleTiles_ShopByPetDiscus.jpeg";

function Categories() {
	const imageArr = [
		{
			src: category1,
			label: "Tropical Freshwater",
		},
		{
			src: category2,
			label: "Marine Fish",
		},
		{
			src: category3,
			label: "Betta",
		},
		{
			src: category4,
			label: "Koi and Pond Fish",
		},
		{
			src: category5,
			label: "Goldfish",
		},
		{
			src: category6,
			label: "Bottom Feeder",
		},
		{
			src: category7,
			label: "Invertebrates",
		},
		{
			src: category8,
			label: "Discus",
		},
	];

	return (
		<div className="image-slider">
			{imageArr.map((image, index) => {
				return (
					<Link
						to={"/shop"}
						className="image-slider__item"
						key={index}
					>
						<img src={image.src} alt="" />
						<p>{image.label}</p>
					</Link>
				);
			})}
		</div>
	);
}

export default Categories;
