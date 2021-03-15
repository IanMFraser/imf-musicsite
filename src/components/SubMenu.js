import React from 'react'
import { Link } from 'react-router-dom';
import styles from './SubMenu.module.css'


const SubMenu = () => {
    return(
        <>
            <ul className={styles.subMenu}>
                <li>
                    <Link className={styles.hvrSweepToRight} to="/music/albums">MUSIC</Link>
                </li>
                <li>
                    <Link className={styles.hvrSweepToRight} to="/music/contact">CONTACT</Link>
                </li>
            </ul>
        </>
    )
}

export default SubMenu