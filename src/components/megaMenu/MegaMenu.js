import React from "react";

import { Link } from "react-router-dom";
import "./MegaMenu.scss";

const MegaMenu = () => {
	return (
		<div className="megaMenu">
			<div className="megaMenu__category">
				<img
					className="megaMenu__category__image"
					src="/productImages/plants.avif"
					alt="category-image"
				/>
				<div className="megaMenu__category__header">Plants</div>
				<ul>
					<Link to="/shop">
						<li className="megaMenu__category__item">
							Live Aquarium Plants
						</li>
					</Link>
					<Link to="/shop">
						<li className="megaMenu__category__item">
							Plant Supplies
						</li>
					</Link>
					<Link to="/shop">
						<li className="megaMenu__category__item">
							Plant Lighting
						</li>
					</Link>
				</ul>
			</div>
			<div className="megaMenu__category">
				<img
					className="megaMenu__category__image"
					src="/productImages/fish.avif"
					alt="category-image"
				/>
				<div className="megaMenu__category__header">Fish Supplies</div>
				<ul>
					<li className="megaMenu__category__item">Fish Food</li>
					<li className="megaMenu__category__item">Fish Meds</li>
					<li className="megaMenu__category__item">
						Breeding Supplies
					</li>
					<li className="megaMenu__category__item">Live Fish</li>
				</ul>
			</div>
			<div className="megaMenu__category">
				<img
					className="megaMenu__category__image"
					src="/productImages/chemicals.avif"
					alt="category-image"
				/>
				<div className="megaMenu__category__header">Aquarium Care</div>
				<ul>
					<li className="megaMenu__category__item">
						Cleaning Supplies
					</li>
					<li className="megaMenu__category__item">
						Filtration & Equipment
					</li>
					<li className="megaMenu__category__item">
						Lights & Headers
					</li>
					<li className="megaMenu__category__item">
						Water Care Supplies
					</li>
				</ul>
			</div>
			<div className="megaMenu__category">
				<img
					className="megaMenu__category__image"
					src="/productImages/merch.webp"
					alt="category-image"
				/>
				<div className="megaMenu__category__header">Gifts & Merch</div>
				<ul>
					<li className="megaMenu__category__item">Gift Cards</li>
					<li className="megaMenu__category__item">
						Tankmates Merch
					</li>
					<li className="megaMenu__category__item">
						Stickers & Decals
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MegaMenu;
