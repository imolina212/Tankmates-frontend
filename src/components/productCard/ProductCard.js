import './../productCard/ProductCard.scss'
import './../../components/productCard/ProductCard.scss'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/cartSlice';

import getStars from '../designUtils/getStars.js'

function ProductCard({id, title, image, price, brand, rating}) {

    const dispatch = useDispatch()

    return (
        <div className="product-card">
            <div className="product-card__canvas">
                <a href={`/shop/${id}`}>
                <img src={image} alt="" />
                </a>
            </div>
            <div className="product-card__content">
                <div className="product-card__content__choices">
                    <p>More Choices available</p>
                </div>
                <div className="product-card__content__title">
                <a href={`/shop/${id}`}>
                    <strong>{brand}</strong><span>{title}</span>
                </a>
                </div>
                <div className="product-card__content__rating">
                {getStars(rating)}
                </div>
                <div className="product-card__content__pricing">
                ${price}
                </div>
                <div className="product-card__content__message">
                <p>FREE 1-3 day shipping over $49</p>
                </div>
            </div>
            <button
            className='button'
                onClick={() => dispatch(addToCart({id, title, brand, image, price, rating}))}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;