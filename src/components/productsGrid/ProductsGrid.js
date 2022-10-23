import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from '../productCard/ProductCard';
import './ProductsGrid.scss';

const API = process.env.REACT_APP_API_URL;

function ProductsGrid() {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        axios.get(`${API}/products`)
            .then((response) =>{
                setProducts(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='product-grid'>
            {products.map((product, index) => {
                return(
                    <ProductCard key={index} product={product} />
                )
            })}
        </div>
    )
}

export default ProductsGrid;