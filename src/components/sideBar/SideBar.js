import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import './SideBar.scss'


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='sidebar'>
                <Link  to='#' className='sidebar__menu-bars'>
                    <FaIcons.FaBars onClick={toggleSidebar} />
                </Link>
                <h1 className='sidebar__title'>Tankmates</h1>
            </div>
            <nav className={sidebar ? 'sidebar__nav-menu active' : 'sidebar__nav-menu'}>
                <ul className='sidebar__nav-menu-items'>
                    <li className='sidebar__toggle'>
                        <Link to="#">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className} >
                                <Link to ={item.path} >
                                    {item.icon}
                                    <span className='sidebar__label'>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;