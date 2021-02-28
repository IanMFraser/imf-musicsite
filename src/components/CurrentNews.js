import React from 'react'

const CurrentNews = () => {
    return(
        <div className="news">
            <h1>News</h1>
            <div className="newsTitle">
                <h2>Sowing and Reaping featured on TOUR MODE</h2>
            </div>
            <div className="newsDate">January 1, 2020 <span className="newsCatagory">Catagory: Release</span></div>
            <div className="newsImage">
                <img src="https://storage.cloud.google.com/album-images/TOURMODE.jpg" alt="tourmode artwork"></img>
            </div>
            <div className="newsContent"></div>
        </div>
    )
}

export default CurrentNews