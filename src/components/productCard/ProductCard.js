import React from "react";

import './ProductCard.scss'
import getStars from '../designUtils/getStars.js'

function ProductCard({product}) {

  return (
    <div className="product-card">
      <div className="product-card__canvas">
        <img src="https://via.placeholder.com/260x260" alt="" />
      </div>
      <div className="product-card__content">
        <div className="product-card__content__choices">
            <p>More Choices available</p>
        </div>
        <div className="product-card__content__title">
          <a href={`/shop/${product.id}`}>
            <strong>{product.brand}</strong><span>{product.product_name}</span>
          </a>
        </div>
        <div className="product-card__content__rating">
          {getStars(product.rating)}
        </div>
        <div className="product-card__content__pricing">
          ${product.price}
        </div>
        <div className="product-card__content__message">
          <p>FREE 1-3 day shipping over $49</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
