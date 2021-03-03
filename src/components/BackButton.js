import React from 'react';
import styles from './BackButton.module.css';
import { useHistory } from 'react-router-dom'

const BackButton = () => {
    
    let history = useHistory()

    const onClickHandler = () => {
        history.push('/music/albums')
    }
    return(
        <>
            <button className={styles.backButton} onClick={onClickHandler}> {'<-- Back'}</button>
        </>
    )
}

export default BackButton