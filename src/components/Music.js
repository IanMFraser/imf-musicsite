import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Album from './Album.js'
import styles from './Music.module.css';
import data from '../data.json'

const Music = () => {

    let { path, url } = useRouteMatch();
    const albums = data.albums;
    
    return(
        <main className={styles.music}>
            <Switch>
                <Route exact path={path}>
                    <h1>Computer Music</h1>
                    <div className={styles.albumGrid}>
                        {
                            albums.map(a => {
                                return <div key={`${a.id}`} className={styles.album}>
                                            <Link to={`${url}/${a.id}`}>
                                              <div className={styles.hoverText}>
                                                    {a.title}
                                                </div>
                                                <span className={styles.albumCover}>
                                                    <img src={a.artwork} alt={`${a.id} artwork`}/>
                                                </span>
                                            </Link>
                                        </div>})
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