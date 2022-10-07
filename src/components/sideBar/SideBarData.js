import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as DiIcons from 'react-icons/di';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const SideBarData = [
    {
        title: 'Shop',
        path: '/shop',
        icon: <FiIcons.FiShoppingBag />,
        className: 'navbar__menuItem'
    },
    {
        title: 'learn',
        path: '/',
        icon: <DiIcons.DiStackoverflow />,
        className: 'navbar__menuItem'
    },
    {
        title: 'About',
        path: '/',
        icon: <GiIcons.GiCirclingFish />,
        className: 'navbar__menuItem'
    },
    {
        title: 'Club',
        path: '/',
        icon: <MdIcons.MdGroups />,
        className: 'navbar__menuItem'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'navbar__menuItem'
    }
]
