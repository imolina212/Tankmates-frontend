import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MenuItem from "../menuItem/MenuItem";
import MegaMenu from "../megaMenu/MegaMenu";
import { MdKeyboardArrowDown, MdClear } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import SubMenu from "../subMenu/SubMenu";
import SubMenuItem from "./../subMenuItem/SubMenuItem";
import "./NavBar.scss";

function NavBar({ loggedIn, setUserId }) {
	const [expandNavbar, setExpandNavbar] = useState(true);
	const [condenseNavbar, setCondenseNavbar] = useState(false);
	const [showNavBottom, setShowNavBottom] = useState(true);

	const toggleMenu = () => {
		setExpandNavbar(!expandNavbar);
		setShowNavBottom(!showNavBottom);
	};

	const cart = useSelector((state) => state.cart);

	const getTotalQuantity = () => {
		let total = 0;
		cart.forEach((item) => {
			total += item.quantity;
		});
		return total;
	};

	const handleClick = () => {
		setExpandNavbar(false);
	};

	const collapseNavBarOnScroll = () => {
		const y = window.scrollY;

		if (y < 100) {
			setShowNavBottom(true);
			setExpandNavbar(true);
		}

		if (y >= 300) {
			setCondenseNavbar(true);
			setExpandNavbar(false);
		} else {
			setCondenseNavbar(false);
		}
	};

	window.addEventListener("scroll", collapseNavBarOnScroll);

	return (
		<div className="navbar">
			<div className="navbar__header">
				<div className="navbar__header__left">
					<div
						className={
							condenseNavbar
								? "navbar__header__hamburgerMenu"
								: "navbar__header__hamburgerMenu__hide"
						}
					>
						<div className="navbar__header__hamburgerMenu_icon">
							{showNavBottom ? (
								<GiHamburgerMenu onClick={toggleMenu} />
							) : (
								<MdClear size={35} onClick={toggleMenu} />
							)}
						</div>
						<div
							className={
								expandNavbar
									? "navbar__header__mobileMenu"
									: "navbar__header__mobileMenu__hide"
							}
						></div>
					</div>

					<div className="navbar__header__logo">
						<div className="navbar__header__logo__image">
							<img
								src="/tankmates_logo2.png"
								alt="TankMates logo"
							/>
						</div>
						<div className="navbar__header__logo__title">
							<Link to="/">tankmates</Link>
						</div>
					</div>
				</div>

				<div className="navbar__header__right">
					<div className="navbar__header__right__shippingAd">
						<div className="navbar__header__right__shippingAd__icon">
							<svg
								width="44"
								height="30"
								viewBox="0 0 44 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M42.3 21.3084V15.706C42.3 15.496 42.23 15.2859 42.02 15.1458L38.52 12.3447C38.38 12.2746 38.24 12.2046 38.1 12.2046H37.26L35.79 4.50144C35.44 2.89078 34.04 1.77032 32.36 1.70029H28.3C28.3 1.28012 28.02 1 27.6 1H1.7C1.28 1 1 1.28012 1 1.70029V22.0086C1 22.4288 1.28 22.7089 1.7 22.7089H3.1V24.1095C3.1 24.5297 3.38 24.8098 3.8 24.8098H5.97C6.32 27.4709 8.84 29.3617 11.5 28.9415C13.67 28.6614 15.35 26.9107 15.63 24.8098H29.77C30.12 27.4709 32.64 29.3617 35.3 28.9415C37.47 28.6614 39.15 26.9107 39.43 24.8098H42.3C42.72 24.8098 43 24.5297 43 24.1095V22.0086C43 21.5885 42.72 21.3084 42.3 21.3084ZM28.3 3.10086H32.36C33.34 3.10086 34.18 3.80115 34.39 4.78156L35.86 12.2046H28.3V3.10086ZM5.97 23.4092H4.5V22.7089H6.11C6.04 22.919 5.97 23.1991 5.97 23.4092ZM10.8 27.6109C8.84 27.6109 7.3 26.0703 7.3 24.1095C7.3 22.1487 8.84 20.6081 10.8 20.6081C12.76 20.6081 14.3 22.1487 14.3 24.1095C14.3 26.0703 12.76 27.6109 10.8 27.6109ZM10.8 19.2075C9.19 19.2075 7.72 19.9778 6.81 21.3084H2.4V2.40058H26.9V21.3084H14.79C13.88 19.9778 12.41 19.2075 10.8 19.2075ZM29.77 23.4092H15.63C15.63 23.1991 15.56 22.919 15.49 22.7089H29.91C29.84 22.919 29.77 23.1991 29.77 23.4092ZM34.6 27.6109C32.64 27.6109 31.1 26.0703 31.1 24.1095C31.1 23.4792 31.24 22.919 31.59 22.3588C32.57 20.6781 34.67 20.1179 36.35 21.0983C36.91 21.3784 37.33 21.8686 37.61 22.3588C37.89 22.919 38.1 23.4792 38.1 24.1095C38.1 26.0703 36.56 27.6109 34.6 27.6109ZM34.6 19.2075C32.99 19.2075 31.52 19.9778 30.61 21.3084H28.3V13.6052H37.89L40.9 16.0562V21.3084H38.59C37.68 19.9778 36.21 19.2075 34.6 19.2075ZM41.6 23.4092H39.43C39.43 23.1991 39.36 22.919 39.29 22.7089H41.6V23.4092Z"
									fill="white"
									stroke="white"
									stroke-width="0.25"
								></path>
							</svg>
						</div>
						<div className="navbar__header__right__shippingAd__text">
							<div>Fast Free Shipping</div>
							<div className="navbar__header__right__shippingAd__subtext">
								on all orders over $79.99
							</div>
						</div>
					</div>
					<Link to="/cart">
						<div className="navbar__header__right__cart">
							<div className="navbar__header__right__cart__icon">
								<FiShoppingCart size={25} />
								<div className="navbar__header__right__cart__totalItems">
									{getTotalQuantity() || 0}
								</div>
							</div>
							<div className="navbar__header__right__cart__text">
								<span>
									your cart
									<MdKeyboardArrowDown />
								</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div
				className={
					"navbar__bottom" + (expandNavbar ? "" : " collapsed")
				}
			>
				<ul className={"navbar__bottom__menu"}>
					<MenuItem text="Shop">
						<MegaMenu />
					</MenuItem>
					<Link to="/tanks">
						<MenuItem text="My Tanks" relative>
							<SubMenu>
								<SubMenuItem text="Display tank" />
								<SubMenuItem text="Planted tank" />
								<SubMenuItem text="Create a tank" />
							</SubMenu>
						</MenuItem>
					</Link>
					<Link to="/about">
						<MenuItem text="About" relative>
							<SubMenu>
								<SubMenuItem text="About us" />
								<SubMenuItem text="Meet the team" />
							</SubMenu>
						</MenuItem>
					</Link>
					<Link to="/help">
						<MenuItem text="Help" relative>
							<SubMenu>
								<SubMenuItem text="FAQ" />
								<SubMenuItem text="Contact us" />
							</SubMenu>
						</MenuItem>
					</Link>
				</ul>
				<Link
					to={loggedIn ? "/" : "/login"}
					onClick={loggedIn ? () => setUserId(0) : ""}
				>
					<MenuItem
						text={
							<div className="navbar__bottom__login">
								<p className="navbar__bottom__login__greeting">
									Hello, {loggedIn ? "Isidro" : "Login"}
								</p>
								<p className="navbar__bottom__login__text">
									Accounts & Lists
									<MdKeyboardArrowDown className="arrow" />
								</p>
							</div>
						}
					></MenuItem>
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
