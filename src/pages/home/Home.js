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
							<Link to="/shop">
								<Button
									name="Shop Live Plants"
									variant="primary"
									size="sq large"
									arrow={true}
								/>
							</Link>
						</div>
					</div>
					<Link to="/shop">
						<img src="/productImages/promo1_1.webp" alt="promo1" />
					</Link>
				</div>
				<div className="home-page__featured-promotions__item">
					<div className="home-page__featured-promotions__item__content">
						<h2>Fish Food</h2>
						<div>
							<Link to="/shop">
								<Button
									name="Shop Fish Food"
									variant="primary"
									size="sq large"
									arrow={true}
								/>
							</Link>
						</div>
					</div>
					<Link to="/shop">
						<img src="/productImages/promo2_1.jpg" alt="promo2" />
					</Link>
				</div>
				<div className="home-page__featured-promotions__item">
					<div className="home-page__featured-promotions__item__content">
						<h2>Easy Range</h2>
						<div>
							<Link to="/shop">
								<Button
									name="Shop the easy range"
									variant="primary"
									size="sq large"
									arrow={true}
								/>
							</Link>
						</div>
					</div>
					<Link to="/shop">
						<img src="/productImages/promo3.jpg" alt="promo3" />
					</Link>
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
