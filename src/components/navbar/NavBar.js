import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MenuItem from '../menuItem/MenuItem';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import './NavBar.scss'

function NavBar(props) {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const toggleMenu = () => {
        console.log('navbar toggled')
        setExpandNavbar(!expandNavbar)
    }

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
        <div className="navbar__hamburgerMenu">
          <GiHamburgerMenu onClick={toggleMenu} />
        </div>
        <div className="navbar__logo">
          <div className="navbar__logo__image">
            <img src="/tankmates_logo2.png" alt="TankMates logo" />
          </div>
          <div className="navbar__logo__title">
            <Link to="/">tankmates</Link>
          </div>
        </div>

        <div className="navbar__right">
          <ul
            className={
              expandNavbar
                ? "navbar__right__itemLinks"
                : "navbar__right__collapsedItemLinks"
            }
          >
            <Link to="/shop">
              <MenuItem text="Shop" />
            </Link>
            <Link to="/tanks">
              <MenuItem text="My Tanks" />
            </Link>
            <Link to="/about">
              <MenuItem text="About" />
            </Link>
            <Link to="/cart">
              <MenuItem
                text={
                  <>
                    <FiShoppingCart className="cart-icon" />
                    <div className="cart-totalItems">
                      {getTotalQuantity() || 0}
                    </div>
                  </>
                }
              />
            </Link>
          </ul>
          <div className="navbar__right__cart">
            <Link to="/cart">
              <FiShoppingCart className="navbar__right__cart__icon" />
              <div className="navbar__right__cart__totalItems">
                {getTotalQuantity() || 0}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );   
}

export default NavBar;