import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu.js';
import HamburgerMenu from 'react-hamburger-menu'
import styles from './NavBar.module.css';
import subMenuStyles from './SubMenu.module.css'

const NavBar = () => {
    const [clicked, setClicked] = useState(false)

    const onClickHandler = () => {
      const subMenu = document.querySelector(`.${subMenuStyles.subMenu}`)
      setClicked(!clicked)
      if(!clicked || subMenu.style.display === '') {
        subMenu.style.display = 'flex'
      } else {
        subMenu.style.display = 'none'
      }
    }

    return(
        <nav className={styles.navigation}>
          <ul className={styles.mainMenu}>
              <li className={styles.logo}>
                <Link to="/music">IAN M FRASER</Link>
              </li>
              <li>
                <SubMenu />
              </li>
              <li>
                <HamburgerMenu className={styles.hamburger} isOpen={clicked} menuClicked={onClickHandler} width={18} height={15}/>
              </li>
          </ul>
        </nav>
    )
}

export default NavBar;