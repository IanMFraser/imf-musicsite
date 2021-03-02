import React from 'react'
import styles from'./News.module.css'
import data from '../data.json'

const News = () => {

    const currentNews = data.news.currentNews

    return(
        <div className={styles.news}>
            <h1>NEWS</h1>
            <div className={styles.newsTitle}>
                <h2>{currentNews.title}</h2>
            </div>
            <div className={styles.newsDate}>{currentNews.date} 
                <span className={styles.newsCategory}>Category: {currentNews.category}</span>
            </div>
            <div className={styles.newsImage}>
                <img src={currentNews.images} alt={currentNews.alt}></img>
            </div>
            <div className={styles.newsContent}>
                {`${currentNews.content}`} {currentNews.link && <a className={styles.oldNewsLink} href={currentNews.link} target="_blank" rel="noreferrer">{ '>>'} </a>}
            </div>
        </div>
    )
}

export default News