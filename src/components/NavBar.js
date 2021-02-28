import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="navigation">
          <ul className="mainMenu">
              <li className="logo">
                <Link to="/">IAN M FRASER</Link>
              </li>
              <li>
                <ul className="subMenu">
                  <li>
                    <Link to="/music">MUSIC</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </li>
          </ul>
        </nav>
    )
}

export default NavBar;