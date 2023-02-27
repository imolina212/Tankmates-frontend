import React, { useState, useEffect } from "react";

import axios from "axios";
import ProductCard from "../productCard/ProductCard";
import "./ProductsGrid.scss";

const API = process.env.REACT_APP_API_URL;

function ProductsGrid({ productType }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/${productType}`)
			.then((response) => {
				setProducts(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [productType]);

	return (
		<div className="product-grid">
			{products.map((product) => {
				return (
					<ProductCard
						key={product.id}
						product={product}
						productType={productType}
					/>
				);
			})}
		</div>
	);
}

export default ProductsGrid;
