import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import BackButton from './BackButton.js';
import styles from './Album.module.css';

const Album = ({albums}) => {
    let { albumId } = useParams();
    const album = albums.filter(a => a.id === albumId);

    return(
        <div className={styles.album}>
            <h2>{`${album[0].artist} - ${album[0].title}`}</h2>
            <div className={styles.mediaContainer}>
                <iframe title={album[0].id} style={{border: "0", width: "350px", height: "350px"}} src={album[0].iframeSrc}>
                    <a href={album[0].mediaLink}>{`${album[0].title} by ${album[0].artist}`}</a>
                </iframe>
            </div>
            <div className={styles.tracklist}>
                <ol>
                    {album[0].tracklist.length > 0 && album[0].tracklist.map((t,i) => <li key={i}>{t}</li>)}
                </ol>
            </div>
            <div className={styles.albumDescription}>
                <p>{album[0].description}</p>
            </div>
            <br/>
            <div className={styles.albumCredits}>
                {album[0].credits.length > 0 && album[0].credits.map((c,i) => <p key={i}>{c}</p>)}
            </div>   
            <br/>
            <BackButton />
        </div>
    )
}

export default withRouter(Album)