import React, { useState } from 'react'

import './NavBar.scss'
import { NavLink } from 'react-router-dom';
import { GiCirclingFish } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar(props) {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const toggleMenu = () => {
        console.log('navbar toggled')
        setExpandNavbar(!expandNavbar)
    }

    return (
        <div className="navbar">
            <div className='navbar__logo'><GiCirclingFish /></div>
                <nav className={expandNavbar ? 'navbar__menuItems navbar__menuItemsMobile active' : 'navbar__menuItems navbar__menuItemsMobile'} style={{'display' : expandNavbar ? "block" : "none"}}>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </nav>
                <div
                className="navbar__menuExpand"
                onClick={()=> toggleMenu()}><GiHamburgerMenu /></div>
        </div>
    )   
}

export default NavBar;