import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MenuItem from "../menuItem/MenuItem";
import MegaMenu from "../megaMenu/MegaMenu";
import { MdKeyboardArrowDown, MdClear } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
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

	// useEffect(() => {
	// 	setExpandNavbar(true);
	// }, []);

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
						<MenuItem text="My Tanks" />
					</Link>
					<Link to="/about">
						<MenuItem text="About" />
					</Link>
					<Link
						to={loggedIn ? "/" : "/login"}
						onClick={loggedIn ? () => setUserId(0) : ""}
					>
						<MenuItem text={loggedIn ? "Log out" : "Log in"} />
					</Link>
					<Link to="/cart" className="bottomnavcart">
						<MenuItem
							text={
								<>
									<FiShoppingCart className="cart-icon" />
									<div className="cart-totalItems">
										{getTotalQuantity() || 0}
									</div>
								</>
							}
						/>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
