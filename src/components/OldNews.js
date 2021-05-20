import React from 'react'
import data from '../data.json'
import styles from './OldNews.module.css'
import classNames from 'classnames'

const OldNews = () => {
    const oldNews = data.news.oldNews
    const linkClassNames = classNames(styles.oldNewsLink, styles.hvrBounceIn)

    return(
        <div className={styles.oldNews}>
            <h3>OLD NEWS</h3>
            <ul>
                {
                    oldNews.map((n) => <li key={n.id}><strong>{`${n.date} ${n.category}`}</strong>{ ` ${n.content}`} { n.link && <a className={linkClassNames} href={n.link} target="_blank" rel="noreferrer">{ '>>'} </a>} </li>)
                }
            </ul>
        </div>
    )
}

export default OldNews