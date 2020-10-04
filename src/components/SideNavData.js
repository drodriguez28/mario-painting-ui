import React from 'react'
// import { FaBars } from "react-icons/fa";
import { AiFillHome, AiFillFormatPainter } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/io";


export const SideBarData = [
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