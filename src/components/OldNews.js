import React from 'react'
import data from '../data.json'
import './OldNews.css'

const OldNews = () => {
    const oldNews = data.news.oldNews
    return(
        <div className="oldNews">
            <h3>OLD NEWS</h3>
            <ul>
                {
                    oldNews.map((n) => <li key={n.id}><strong>{`• ${n.date} ${n.catagory}`}</strong>{ ` ${n.content}`} { n.link && <a className="oldNewsLink" href={n.link} target="_blank" rel="noreferrer">{ '>>'} </a>} </li>)
                }
            </ul>
        </div>
    )
}

export default OldNews