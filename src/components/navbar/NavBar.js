import React, { /*useState*/ } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MenuItem from '../menuItem/MenuItem';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
// import { GiHamburgerMenu } from "react-icons/gi";
import './NavBar.scss'

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
                        <Link to="/shop"><MenuItem text="Shop" /></Link>
                        <Link to="/tanks"><MenuItem text="My Tanks" /></Link>
                        <Link to="/about"><MenuItem text="About" /></Link>
                        <Link to="/cart"><MenuItem text={<><FiShoppingCart className="cart-icon" /><p className='cart-totalItems'>{getTotalQuantity() || 0}</p></>} /></Link>
                    </ul>
                </div>
            </div>
        </div>
    )   
}

export default NavBar;