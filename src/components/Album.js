import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import BackButton from './BackButton.js';
import './Album.css';

const Album = ({albums}) => {
    let { albumId } = useParams();
    const album = albums.filter(a => a.id === albumId);

    return(
        <div className="album">
            <h2>{album[0].title}</h2>
            <div className="mediaContainer">
                <iframe title={album[0].id} style={{border: "0", width: "350px", height: "350px"}} src={album[0].iframeSrc}>
                    <a href={album[0].mediaLink}>{`${album[0].title} by ${album[0].artist}`}</a>
                </iframe>
            </div>
            <div className="albumDescription">
                {album[0].description}
            </div>
            <BackButton />
        </div>
    )
}

export default withRouter(Album)