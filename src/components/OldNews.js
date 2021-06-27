import React from 'react'
import data from '../data.json'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

const OldNews = () => {

    const oldNews = data.news.oldNews

    return(
        <Card className="border-0">
            <Card.Header as="h2" className="border-0 px-0">OLD NEWS</Card.Header>
                <ListGroup variant="flush" as="ul">
                        {
                            oldNews.map(news => {
                                return <ListGroup.Item key={news.id} as="li" className="mt-2 border-0 px-0">
                                    <strong>
                                        {`${news.date}`}
                                        <Badge variant={news.categoryVariant} className="mx-2">
                                            {news.category}
                                        </Badge>
                                    </strong>
                                    { ` ${news.content} `}
                                    { news.link && <a className="newsLink hvrBounceIn" href={news.link} target="_blank" rel="noreferrer">{ ' >>'} </a>}
                                </ListGroup.Item>
                            })
                        }
                </ListGroup>
        </Card>
    )
}

export default OldNews