import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Album from './Album.js'
import data from '../data.json'

const Music = () => {

    let { path, url } = useRouteMatch();
    const albums = data.albums;
    const placeholderUrl = "https://via.placeholder.com/320";

    return(
        <main>
            <Switch>
                <Route exact path={path}>
                    <h1>Computer Music</h1>
                    <div>
                        {
                            albums.map(a => {
                                return <div key={`${a.id}`}>
                                            <Link to={`${url}/${a.id}`}>
                                                <div>
                                                    {a.title}
                                                </div>
                                                <span>
                                                    {a.artwork ? <Image src={a.artwork} alt={`${a.id} artwork`}/> : <Image src={placeholderUrl} alt={`${a.id} artwork`}/>}
                                                </span>
                                            </Link>
                                        </div>
                                        }
                            )
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