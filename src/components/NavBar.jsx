import React from 'react';
import  { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function NavBar() {

    return (
    <>
        <div className="sidenav">
           
        <Link to= "#" className="menu-bars"> 
        <FaBars/>
        </Link>        
        </div>
    </>  
    );
}

export default NavBar;
