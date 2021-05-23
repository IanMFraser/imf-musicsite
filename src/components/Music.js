import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Album from './Album.js'
import Image from 'react-bootstrap/Image'
import styles from './Music.module.css';
import data from '../data.json'

const Music = () => {

    let { path, url } = useRouteMatch();
    const albums = data.albums;
    const placeholderUrl = "https://via.placeholder.com/320";

    return(
        <main className={styles.music}>
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
                                                    {a.artwork ? <Image src={a.artwork} alt={`${a.id} artwork`}/> : <Image src={placeholderUrl} alt={`${a.id} artwork`}/>}
                                                </span>
                                            </Link>
                                        </div>
                                        }
                                    )
                        }
                    </div>
        </main>
    )
}

export default Music;