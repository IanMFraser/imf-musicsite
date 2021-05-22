import React from 'react'
import data from '../data.json'
import styles from './OldNews.module.css'
import classNames from 'classnames'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
const OldNews = () => {
    const oldNews = data.news.oldNews
    const linkClassNames = classNames(styles.oldNewsLink, styles.hvrBounceIn)

    return(
        <>
            <h2 className="m-3">OLD NEWS</h2>
            <ListGroup variant="flush" as="ul">
                    {
                        oldNews.map((n) => <ListGroup.Item key={n.id} style={{backgroundColor: '#f8f8f8'}} as="li" className="mt-4"><strong>{`${n.date}`}<Badge variant={n.categoryVariant} className="mx-2">{n.category}</Badge></strong>{ ` ${n.content}`} { n.link && <a className={linkClassNames} href={n.link} target="_blank" rel="noreferrer">{ '>>'} </a>} </ListGroup.Item>)
                    }
            </ListGroup>
        </>
    )
}

export default OldNews