import React from 'react';

import './Shop.scss'
import ProductsGrid from '../../components/productsGrid/ProductsGrid';
import FilterSection from '../../components/filterSection/FilterSection';

function Shop() {
    return (
        <div className='shop-page'>
            <div className="filter-section">
                <FilterSection />
            </div>
            <div className="product-grid">
                <ProductsGrid />
            </div>
        </div>
    )
}

export default Shop;