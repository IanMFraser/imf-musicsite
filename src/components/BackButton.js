import React from 'react';
import './BackButton.css';
import { useHistory } from 'react-router-dom'

const BackButton = () => {
    
    let history = useHistory()

    const onClickHandler = () => {
        history.push('/music')
    }
    return(
        <>
            <button className="backButton" onClick={onClickHandler}> {'<-- Back'}</button>
        </>
    )
}

export default BackButton