import React from 'react';
import { useHistory } from 'react-router-dom'

const BackButton = () => {
    
    let history = useHistory()

    const onClickHandler = () => {
        history.push('/music/albums')
    }
    return(
        <>
            <button onClick={onClickHandler}> {'<-- Back'}</button>
        </>
    )
}

export default BackButton