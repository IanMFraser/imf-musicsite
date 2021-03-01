import React from 'react'
import './News.css'
import data from '../data.json'

const News = () => {

    const currentNews = data.news.currentNews

    return(
        <div className="news">
            <h1>NEWS</h1>
            <div className="newsTitle">
                <h2>{currentNews.title}</h2>
            </div>
            <div className="newsDate">{currentNews.date} 
                <span className="newsCategory">Category: {currentNews.category}</span>
            </div>
            <div className="newsImage">
                <img src={currentNews.images} alt={currentNews.alt}></img>
            </div>
            <div className="newsContent">
                {`${currentNews.content}`} {currentNews.link && <a className="oldNewsLink" href={currentNews.link} target="_blank" rel="noreferrer">{ '>>'} </a>}
            </div>
        </div>
    )
}

export default News