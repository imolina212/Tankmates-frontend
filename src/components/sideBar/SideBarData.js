import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as DiIcons from 'react-icons/di';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const SideBarData = [
    {
        title: 'Shop',
        path: '/',
        icon: <FiIcons.FiShoppingBag />,
        className: 'nav-menu__text'
    },
    {
        title: 'learn',
        path: '/',
        icon: <DiIcons.DiStackoverflow />,
        className: 'nav-menu__text'
    },
    {
        title: 'About',
        path: '/',
        icon: <GiIcons.GiCirclingFish />,
        className: 'nav-menu__text'
    },
    {
        title: 'Club',
        path: '/',
        icon: <MdIcons.MdGroups />,
        className: 'nav-menu__text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-menu__text'
    }
]
