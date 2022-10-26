import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';
import getStars from '../designUtils/getStars.js'
import './ProductDetails.scss'

function ProductDetails() {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${URL}/products/${id}`)
        .then((response) => {
            setProduct(response.data)})
        .catch((err) => { 
            console.log(err)
        })
    }, [URL, id])

    const {product_name, brand, rating, price, in_stock, product_description, pic} = product;

    return (
        <div className='productDetails'>
            <div className="productDetails__image">
                <img src={pic} alt="" />
            </div>
            {Object.keys(product).length && 
                <div className="productDetails__info">
                    <div className="productDetails__info__title">
                        {product_name}
                        <div><a href="#">By {brand}</a></div>
                    </div>
                    <div className="productDetails__info__rating">
                        {getStars(rating)}
                    </div>
                    <div className="productDetails__info__price">
                        $ {price} 
                    </div>
                    <div className="productDetails__info__availability">
                        Availability: {in_stock ? <span className='green'>in stock</span> : <span className='red'>out of stock</span>}
                    </div>
                    <div className="productDetails__info__description">
                        {product_description}
                    </div>
            </div>}
        </div>
    )
}

export default ProductDetails;