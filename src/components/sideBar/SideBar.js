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
            <nav className='navbar'>
                <div className='navbar__menuToggle'>
                    <Link to='#'>
                        <BiIcons.BiMenuAltLeft onClick={toggleSidebar} />
                    </Link>
                </div>
                <div className='navbar__title'>
                    <h1>Tankmates</h1>
                </div>
                <div >
                    <SearchBar className="searchBar" />
                </div>
                <ul className={sidebar ? 'navbar__menuItems' : 'navbar__collapsedMenuItems'} >
                    <li>
                        <Link to="#">
                            <AiIcons.AiOutlineClose size="30px"  onClick={toggleSidebar}/>
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className} >
                                <Link to ={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
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