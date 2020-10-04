import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import {SideNavData} from "./SideNavData";

function NavBar() {

const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <AiOutlineClose />
            <Link to="#" className="menu-bars"></Link>
          </li>
          {SideNavData.map((item, index) => {
              return (
                  <li key={index} className={item.cName}>
                      <Link to= {item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                      </Link>
                  </li>
              )
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
