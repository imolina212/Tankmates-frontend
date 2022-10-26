import React, { useState } from 'react'

import './NavBar.scss'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
// import { GiHamburgerMenu } from "react-icons/gi";

function NavBar(props) {

    // const [expandNavbar, setExpandNavbar] = useState(false);

    // const toggleMenu = () => {
    //     console.log('navbar toggled')
    //     setExpandNavbar(!expandNavbar)
    // }

    const cart = useSelector((state) => state.cart)
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }
    
    return (
        <div className="navbar">
            <div className="navbar__items">
                <div className="navbar__logo">
                    <img src="https://via.placeholder.com/150" alt="TankMates logo" />
                    <span><Link to="/">Tankmates app</Link></span>
                </div>
            
                <div className="navbar__right">
                    <ul className="navbar__itemLinks">
                        <li><Link to="/shop">Shop<span><MdKeyboardArrowDown /></span></Link></li>
                        <li>My Tanks</li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/cart" className="cart-icon"><FiShoppingCart /><p className='cart-totalItems'>{getTotalQuantity() || 0}</p></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )   
}

export default NavBar;