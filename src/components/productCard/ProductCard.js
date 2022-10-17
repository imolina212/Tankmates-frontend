import React from "react";

import './ProductCard.scss'
// import FaStar from "react-icons/fa";
// import FaStarHalfAlt from "react-icons/fa";
// import FaRegStar from "react-icons/fa";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__canvas">
        <img src="https://via.placeholder.com/216x216" alt="" />
      </div>
      <div className="product-card__content">
        <div className="product-card__choices">
          <p>
            <a href="#">More Choices available</a>
          </p>
        </div>
        <div className="product-title-text">
          <a className="product-card__title" href="#">
            <strong>Marineland</strong> Bio-Wheel Penguin Rite-Size C Filter
            Cartridge, 6 count
          </a>
        </div>
        <div className="product-card__rating">
          {/* <FaRegStar /> (40) */}
        </div>
        <div className="product-card__pricing">
          <p className="product-card__message">FREE 1-3 day shipping over $49</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
