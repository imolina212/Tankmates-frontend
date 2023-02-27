import { useLocation, Link } from "react-router-dom";

import "./BreadCrumbs.scss";

export default function BreadCrumbs() {
	const location = useLocation();

	return (
		<div className="breadcrumbs">
			<Link to="/" className="breadcrumbs__home-link">
				Home
			</Link>{" "}
			{location.pathname
				.split("/")
				.filter((crumb) => crumb !== "")
				.map((crumb) => {
					let currentLink = "";
					if (location.pathname.length === 2) currentLink = "/Home";
					currentLink += `/${crumb}`;
					const isShop = currentLink === "/shop";
					if (crumb === "products" || crumb === "plants") {
						currentLink = "/shop" + currentLink;
					}
					return (
						<li className="crumb" key={crumb}>
							{isShop ? (
								<a
									href={"/" + currentLink}
									onClick={(e) => e.preventDefault()}
								>
									{crumb.slice(0, 1).toUpperCase() +
										crumb.slice(1)}
								</a>
							) : (
								<Link to={currentLink}>
									{crumb.slice(0, 1).toUpperCase() +
										crumb.slice(1)}
								</Link>
							)}
						</li>
					);
				})}
		</div>
	);
}
