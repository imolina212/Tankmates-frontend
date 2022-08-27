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
        className: 'sidebar__nav-text'
    },
    {
        title: 'learn',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'sidebar__nav-text'
    },
    {
        title: 'About',
        path: '/',
        icon: <FcIcons.FcAbout />,
        className: 'sidebar__nav-text'
    },
    {
        title: 'Club',
        path: '/',
        icon: <IoIcons.IoMdPeople />,
        className: 'sidebar__nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'sidebar__nav-text'
    }
]
