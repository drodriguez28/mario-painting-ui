import React from 'react'
import { AiFillHome, AiFillFormatPainter, AiFillContacts } from "react-icons/ai";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <AiFillFormatPainter/>,
        cName:'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact-us',
        icon: <AiFillContacts/>,
        cName:'nav-text'
    }
]


