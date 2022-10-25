import React, { useState } from 'react'

import './NavBar.scss'
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/gi";

function NavBar(props) {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const toggleMenu = () => {
        console.log('navbar toggled')
        setExpandNavbar(!expandNavbar)
    }
    
    return (
        <div class="navbar">
            <div class="navbar__items">
                <div class="navbar__logo">
                    <img src="https://via.placeholder.com/150" alt="TankMates logo" />
                    <span><a href="/">Tankmates app</a></span>
                </div>
            
                <div class="navbar__left">
                    <ul class="navbar__itemLinks">
                        <li><a href="/shop">Shop<span><MdKeyboardArrowDown /></span></a></li>
                        <li>myTanks</li>
                        <li>About</li>
                        <li>Log In</li>
                    </ul>
                </div>
            </div>
        </div>
    )   
}

export default NavBar;