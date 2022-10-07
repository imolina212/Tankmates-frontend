import React from 'react'

import './ProductsGrid.scss'
import ProductCard from '../productCard/ProductCard';

function ProductsGrid() {

    return (
        <div className='product-grid'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductsGrid;