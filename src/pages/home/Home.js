import React from "react";
import { Link } from "react-router-dom";

import Carousel from "../../components/carousel/Carousel";
import Categories from "../../components/carousel/Categories";
import Button from "./../../components/button/Button";
import "./Home.scss";

export default function Home() {
	return (
		<div className="home-page">
			<div className="home-page__featured-promotions">
				<div className="home-page__featured-promotions__item">
					<div className="home-page__featured-promotions__item__content">
						<h2 className="mega-title">Live Plants</h2>
						<div>
							<p>Live Aquarium Plants are our specialty</p>
							<Link to="/shop/plants">
								<Button
									name="Shop Live Plants"
									variant="primary dark"
									size="sq large"
									arrow={true}
								/>
							</Link>
						</div>
					</div>
					<Link to="/shop/plants">
						<img
							src="/productImages/promo1_1.webp"
							alt="promo1"
							className="home-page__featured-promotions__item__image"
						/>
					</Link>
				</div>
				<div className="home-page__featured-promotions__item">
					<div className="home-page__featured-promotions__item__content">
						<h2>Fish Food</h2>
						<div>
							<Link to="/shop/products">
								<Button
									name="Shop Fish Food"
									variant="primary dark"
									size="sq large"
									arrow={true}
								/>
							</Link>
						</div>
					</div>
					<Link to="/shop/products">
						<img
							src="/productImages/promo2_1.jpg"
							alt="promo2"
							className="home-page__featured-promotions__item__image"
						/>
					</Link>
				</div>
				<div className="home-page__featured-promotions__item">
					<div className="home-page__featured-promotions__item__content">
						<h2>Easy Range</h2>
						<div>
							<Link to="/shop/products">
								<Button
									name="Shop the easy range"
									variant="primary dark"
									size="sq large"
									arrow={true}
								/>
							</Link>
						</div>
					</div>
					<Link to="/shop/products">
						<img
							src="/productImages/promo3.jpg"
							alt="promo3"
							className="home-page__featured-promotions__item__image"
						/>
					</Link>
				</div>
			</div>
			<div className="home-page__text">
				<div className="home-page__text__heading">
					At tankmates, we focus on your aquarium
				</div>
				<div className="home-page__text__content">
					We specialize in aquatic plants, freshwater tropical fish
					and supporting the freshwater fishkeeping community.
				</div>
			</div>
			<div className="carousel-container">
				<Carousel />
			</div>
			<div className="category-container">
				<Categories />
			</div>
		</div>
	);
}
