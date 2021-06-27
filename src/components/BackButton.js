import React from 'react';
import { useHistory } from 'react-router-dom'

const BackButton = () => {
    
    let history = useHistory()

    const onClickHandler = () => {
        history.push('/music/albums')
    }
    return(
        <>
            <button onClick={onClickHandler} className="backButton"> {'<-- Back'}</button>
        </>
    )
}

export default BackButton