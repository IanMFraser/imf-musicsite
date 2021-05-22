import React from 'react'
import data from '../data.json'
import classNames from 'classnames'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import styles from './News.module.css'

const News = () => {

    const currentNews = data.news.currentNews
    const linkClassNames = classNames(styles.newsLink, styles.hvrBounceIn)

    return(
        <Card style={{border:"none", backgroundColor:'#f8f8f8'}}>
            <Card.Header as="h1" style={{border:"none", backgroundColor:'#f8f8f8'}}>News</Card.Header>
            <Card.Body>
                <Card.Title className="mx-2">{currentNews.title}</Card.Title>
                <Card.Subtitle className="m-2 text-muted">
                    {currentNews.date} 
                    <Badge variant="info" className="ml-2">{currentNews.category}</Badge>
                </Card.Subtitle>
                <Card.Img src={currentNews.images} style={{width: '320px', height: '320px'}} className="mt-4"></Card.Img>
                <Card.Text className="mt-4">{currentNews.content} {currentNews.link && <a className={linkClassNames} href={currentNews.link} target="_blank" rel="noreferrer">{ '>>'} </a>}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default News