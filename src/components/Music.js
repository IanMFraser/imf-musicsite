import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Album from './Album.js'
import './Music.css';
import data from '../data.json'

const Music = () => {

    let { path, url } = useRouteMatch();
    const albums = data.albums;
    
    return(
        <main className="music">
            <Switch>
                <Route exact path={path}>
                    <h1>Computer Music</h1>
                    <div className="albumGrid">
                        {
                            albums.map(a => {
                                return <Link key={`${a.id}`} to={`${url}/${a.id}`}>
                                            <span className="albumCover">
                                                <img src={a.artwork} alt={`${a.id} artwork`}/>
                                            </span>
                                        </Link>})
                        }
                    </div>
                </Route>
                <Route path={`${path}/:albumId`}>
                    <Album albums={albums}/>
                </Route>
            </Switch>
        </main>
    )
}

export default Music;