import React from "react";

import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import FilterSection from "../../components/filterSection/FilterSection";
import { useParams } from "react-router-dom";
import "./Shop.scss";

function Shop() {
	const { productType } = useParams();

	return (
		<div className="shop-page">
			<div className="filter-section">
				<FilterSection />
			</div>
			<div className="product-grid">
				<ProductsGrid productType={productType} />
			</div>
		</div>
	);
}

export default Shop;
