import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    {/* customize all icons at the top level; in this case, all icons are the same color*/}
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      {/* set state with hooks: if you click on icon and sidebar is showing, menu is active, otherwise it is hidden */}
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        {/* this onClick makes the sidebar disappear when you click on a menu item or 'X' at top */}
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {/* map through data file */}
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
