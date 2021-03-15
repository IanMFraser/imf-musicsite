import React from 'react'
import styles from './HamburgerButton.module.css'

const HamburgerButton = ({ clickHandler }) => {

    return(
        <div className={styles.hamburgerButton}>
            <button onClick={clickHandler}>
                <img src="https://storage.googleapis.com/album-images/icon-hamburger.svg" alt="hamburger"/>
            </button>
        </div>
    )
}

export default HamburgerButton