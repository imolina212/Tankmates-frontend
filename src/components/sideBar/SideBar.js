import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import './SideBar.scss'
import SearchBar from '../searchBar/SearchBar';


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <Link  to='#' className='navbar__icon'>
                    <BiIcons.BiMenuAltLeft onClick={toggleSidebar} />
                </Link>
                <h1>Tankmates</h1>
                <div className='navbar__search-bar'>
                    <SearchBar />
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu__items' onClick={toggleSidebar} >
                    <li className='nav-menu__header'>
                        <Link to="#" className='nav-menu__header__icon'>
                            <AiIcons.AiOutlineClose size="30px" />
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className} >
                                <Link to ={item.path} >
                                    {item.icon}
                                    <span className='label'>{item.title}</span>
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