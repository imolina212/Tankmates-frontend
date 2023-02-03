import React, { useState, useEffect } from "react";

import axios from "axios";
import ProductCard from "../productCard/ProductCard";
import "./ProductsGrid.scss";

const API = process.env.REACT_APP_API_URL;

function ProductsGrid({ name }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/${name}`)
			.then((response) => {
				setProducts(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [name]);

	return (
		<div className="product-grid">
			{products.map((product) => {
				return (
					<ProductCard
						key={product.id}
						product={product}
						name={name}
					/>
				);
			})}
		</div>
	);
}

export default ProductsGrid;
