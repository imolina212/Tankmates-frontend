import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from '../productCard/ProductCard';
import './ProductsGrid.scss';

const API = process.env.REACT_APP_API_URL;

function ProductsGrid() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)

    useEffect(()=> {
        axios.get(`${API}/products`)
            .then((response) =>{
                setProducts(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity;
        })
        return total;
    }

    return (
        <div className='product-grid'>
            {products.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    id={product.id}
                    title={product.product_name}
                    brand={product.brand}
                    image={product.pic}
                    price={product.price}
                    rating={product.rating}
                  />
                );
            })}
        
        </div>
    )
}

export default ProductsGrid;