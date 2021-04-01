import React from 'react'
import styles from'./News.module.css'
import data from '../data.json'
import classNames from 'classnames'

const News = () => {

    const currentNews = data.news.currentNews
    const linkClassNames = classNames(styles.newsLink, styles.hvrBounceIn)

    return(
        <div className={styles.news}>
            <h1 className={styles.newsHeader}>News</h1>
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
                {`${currentNews.content}`} {currentNews.link && <a className={linkClassNames} href={currentNews.link} target="_blank" rel="noreferrer">{ '>>'} </a>}
            </div>
        </div>
    )
}

export default News