import React from 'react';
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

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
        icon: <AiIcons.AiFillHome />,
        className: 'nav-menu__text'
    },
    {
        title: 'About',
        path: '/',
        icon: <FcIcons.FcAbout />,
        className: 'nav-menu__text'
    },
    {
        title: 'Club',
        path: '/',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-menu__text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-menu__text'
    }
]
