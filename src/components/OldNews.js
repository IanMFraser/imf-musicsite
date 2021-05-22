import React from 'react'
import data from '../data.json'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

const OldNews = () => {

    const oldNews = data.news.oldNews

    return(
        <>
            <h2 className="m-3">OLD NEWS</h2>
            <ListGroup variant="flush" as="ul">
                    {
                        oldNews.map(news => {
                            return <ListGroup.Item key={news.id} as="li" className="mt-4">
                                <strong>
                                    {`${news.date}`}
                                    <Badge variant={news.categoryVariant} className="mx-2">
                                        {news.category}
                                    </Badge>
                                </strong>
                                { ` ${news.content}`} 
                                { news.link && <a className="newsLink hvrBounceIn" href={news.link} target="_blank" rel="noreferrer">{ '>>'} </a>} 
                            </ListGroup.Item>
                        })
                    }
            </ListGroup>
        </>
    )
}

export default OldNews