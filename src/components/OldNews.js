import React from 'react'
import data from '../data.json'
import styles from './OldNews.module.css'
import classNames from 'classnames'
import ListGroup from 'react-bootstrap/ListGroup'

const OldNews = () => {
    const oldNews = data.news.oldNews
    const linkClassNames = classNames(styles.oldNewsLink, styles.hvrBounceIn)

    return(
        <ListGroup variant="flush" as="ul">
            <h2 className="m-3">OLD NEWS</h2>
                {
                    oldNews.map((n) => <ListGroup.Item key={n.id} style={{backgroundColor: '#f8f8f8'}} as="li"><strong>{`${n.date} ${n.category}`}</strong>{ ` ${n.content}`} { n.link && <a className={linkClassNames} href={n.link} target="_blank" rel="noreferrer">{ '>>'} </a>} </ListGroup.Item>)
                }
        </ListGroup>
    )
}

export default OldNews