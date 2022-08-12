import React, { useState } from 'react'

import './NavBar.scss'
import { NavLink } from 'react-router-dom';

function NavBar(props) {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const toggleMenu = () => {
        console.log('navbar toggled')
        setExpandNavbar(!expandNavbar)
    }

    return (
        <div className="navbar">
            <div className='navbar__logo'>Logo Here</div>
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
                onClick={()=> toggleMenu()}>=</div>
        </div>
    )   
}

export default NavBar;