import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {

    return(
        <nav className={styles.navigation}>
          <ul className={styles.mainMenu}>
              <li className={styles.logo}>
                <Link to="/">IAN M FRASER</Link>
              </li>
              <li>
                <ul className={styles.subMenu}>
                  <li>
                    <Link className={styles.hvrSweepToRight} to="/music">MUSIC</Link>
                  </li>
                  <li>
                    <Link className={styles.hvrSweepToRight} to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </li>
          </ul>
        </nav>
    )
}

export default NavBar;